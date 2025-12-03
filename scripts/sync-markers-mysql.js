/**
 * Sync markers from the external worker API directly into a MySQL table.
 * Usage (example):
 *   DB_HOST=localhost DB_PORT=3306 DB_USER=root DB_PASSWORD=secret DB_NAME=wwm \
 *   node scripts/sync-markers-mysql.js
 *
 * The script will:
 * 1) Fetch all endpoints via the worker batch API.
 * 2) Create table if it does not exist.
 * 3) Upsert all markers (PRIMARY KEY on source+id).
 */

require("dotenv").config();
const mysql = require("mysql2/promise");

const API_BASE = "https://autumn-dream-8c07.square-spon.workers.dev";

// Mirror of memuat-data.js mapping (key -> endpoint path)
const DATA_ENDPOINTS = {
  list: `${API_BASE}/list`,
  batu: `${API_BASE}/batu`,
  aneh: `${API_BASE}/aneh`,
  cave: `${API_BASE}/cave`,
  soundofheaven: `${API_BASE}/soundofheaven`,
  windofpath: `${API_BASE}/windofpath`,
  windofsacriface: `${API_BASE}/windofsacriface`,
  relic: `${API_BASE}/relic`,
  cat: `${API_BASE}/cat`,
  injustice: `${API_BASE}/injustice`,
  adventure: `${API_BASE}/adventure`,
  meow: `${API_BASE}/meow`,
  knowladge: `${API_BASE}/knowladge`,
  story: `${API_BASE}/story`,
  moon: `${API_BASE}/moon`,
  uncounted: `${API_BASE}/uncounted`,
  precious: `${API_BASE}/precious`,
  gourmet: `${API_BASE}/gourmet`,
  special: `${API_BASE}/specialstrange`,
  toilet: `${API_BASE}/toilet`,
  healing: `${API_BASE}/healingpot`,
  makeafriend: `${API_BASE}/makeafriend`,
  Gib-a-Gab: `${API_BASE}/arrgument`,
  book: `${API_BASE}/book`,
  guard: `${API_BASE}/guard`,
  stronghold: `${API_BASE}/strongehold`,
  boss: `${API_BASE}/boss`,
  materialart: `${API_BASE}/jutsu`,
  pemancing: `${API_BASE}/catchfish`,
  mabuk: `${API_BASE}/pot`,
  kartu: `${API_BASE}/card`,
  panah: `${API_BASE}/shootingarcher`,
  melodi: `${API_BASE}/melody`,
  tebakan: `${API_BASE}/riddle`,
  gulat: `${API_BASE}/summo`,
  mysticlist: `${API_BASE}/mysticlist`,
  innerwayslist: `${API_BASE}/innerwayslist`,
};

const CHUNK_SIZE = 500;

async function fetchAllEndpoints() {
  const entries = Object.entries(DATA_ENDPOINTS);
  const result = {};
  for (const [key, url] of entries) {
    const resp = await fetch(url);
    if (!resp.ok) {
      console.warn(`Failed ${key}: ${resp.status}`);
      result[key] = {};
      continue;
    }
    const json = await resp.json();
    result[key] = json || {};
  }
  return result;
}

function flattenMarkers(data) {
  const rows = [];
  Object.entries(data).forEach(([source, dict]) => {
    if (!dict) return;
    Object.entries(dict).forEach(([entryKey, item]) => {
      const lat = Number(item.lat);
      const lng = Number(item.lng);
      // Some endpoints reuse the same `id` value (e.g. all mysticlist are `PC`),
      // so use the entry key as a stable unique fallback to avoid overwriting rows.
      const id = item.id && item.id !== "PC" ? String(item.id) : String(entryKey);
      rows.push({
        id,
        source,
        name: item.name || "",
        category_id: item.category_id || "",
        lat: Number.isFinite(lat) ? lat : null,
        lng: Number.isFinite(lng) ? lng : null,
        desc: item.desc || "",
        payload: JSON.stringify(item),
      });
    });
  });
  return rows;
}

async function ensureTable(conn, table) {
  const sql = `
    CREATE TABLE IF NOT EXISTS \`${table}\` (
      source VARCHAR(64) NOT NULL,
      id VARCHAR(64) NOT NULL,
      name VARCHAR(255) DEFAULT NULL,
      category_id VARCHAR(64) DEFAULT NULL,
      lat DOUBLE DEFAULT NULL,
      lng DOUBLE DEFAULT NULL,
      description TEXT,
      payload JSON,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (source, id),
      INDEX idx_source (source),
      INDEX idx_category (category_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `;
  await conn.execute(sql);
}

async function upsertChunk(conn, table, chunk) {
  if (!chunk.length) return;
  const placeholders = chunk
    .map(
      () =>
        "(?,?,?,?,?,?,?,?)",
    )
    .join(",");
  const values = [];
  chunk.forEach((row) => {
    values.push(
      row.source,
      row.id,
      row.name,
      row.category_id,
      row.lat,
      row.lng,
      row.desc,
      row.payload,
    );
  });

  const sql = `
    INSERT INTO \`${table}\`
    (source, id, name, category_id, lat, lng, description, payload)
    VALUES ${placeholders}
    ON DUPLICATE KEY UPDATE
      name=VALUES(name),
      category_id=VALUES(category_id),
      lat=VALUES(lat),
      lng=VALUES(lng),
      description=VALUES(description),
      payload=VALUES(payload),
      updated_at=CURRENT_TIMESTAMP
  `;
  await conn.execute(sql, values);
}

async function main() {
  const {
    DB_HOST,
    DB_PORT = "3306",
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_TABLE = "wwm_markers",
  } = process.env;

  if (!DB_HOST || !DB_USER || !DB_NAME) {
    throw new Error("Please set DB_HOST, DB_USER, DB_PASSWORD, DB_NAME (and optional DB_TABLE).");
  }

  console.log("Fetching markers from worker API...");
  const data = await fetchAllEndpoints();
  const rows = flattenMarkers(data);
  console.log(`Fetched ${rows.length} markers, syncing to MySQL...`);

  const conn = await mysql.createConnection({
    host: DB_HOST,
    port: Number(DB_PORT),
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    multipleStatements: false,
  });

  try {
    await ensureTable(conn, DB_TABLE);
    for (let i = 0; i < rows.length; i += CHUNK_SIZE) {
      const chunk = rows.slice(i, i + CHUNK_SIZE);
      await upsertChunk(conn, DB_TABLE, chunk);
      console.log(`Upserted ${Math.min(i + CHUNK_SIZE, rows.length)}/${rows.length}`);
    }
  } finally {
    await conn.end();
  }

  console.log("Sync completed.");
}

main().catch((err) => {
  console.error("Sync failed:", err);
  process.exit(1);
});
