import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import mysql from "mysql2/promise";

const CACHE_PATH = path.join(process.cwd(), "public", "data", "markers-cache.json");
const DEFAULT_TABLE = "wwm_markers";

const ENDPOINT_KEYS = [
  "list",
  "batu",
  "aneh",
  "cave",
  "soundofheaven",
  "windofpath",
  "windofsacriface",
  "relic",
  "cat",
  "injustice",
  "adventure",
  "meow",
  "knowladge",
  "story",
  "moon",
  "uncounted",
  "precious",
  "gourmet",
  "special",
  "toilet",
  "healing",
  "makeafriend",
  "argument",
  "book",
  "guard",
  "stronghold",
  "boss",
  "materialart",
  "pemancing",
  "mabuk",
  "kartu",
  "panah",
  "melodi",
  "tebakan",
  "gulat",
  "mysticlist",
  "innerwayslist",
];

let pool: mysql.Pool | null = null;

function getPool() {
  if (pool) return pool;
  const { DB_HOST, DB_PORT = "3306", DB_USER, DB_PASSWORD, DB_NAME } = process.env;
  if (!DB_HOST || !DB_USER || !DB_NAME) {
    throw new Error("DB connection env missing: DB_HOST, DB_USER, DB_PASSWORD, DB_NAME.");
  }
  pool = mysql.createPool({
    host: DB_HOST,
    port: Number(DB_PORT),
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    connectionLimit: 5,
  });
  return pool;
}

async function readFromDb(endpoints: string[], tableName: string) {
  const conn = await getPool().getConnection();
  try {
    let sql = `SELECT source, id, name, category_id, lat, lng, description, payload FROM \`${tableName}\``;
    let params: any[] = [];
    if (endpoints.length) {
      const placeholders = endpoints.map(() => "?").join(",");
      sql += ` WHERE source IN (${placeholders})`;
      params = endpoints;
    }
    const [rows] = await conn.query(sql, params);
    const result: Record<string, Record<string, any>> = {};
    (rows as any[]).forEach((row) => {
      const source = row.source as string;
      if (!result[source]) result[source] = {};
      result[source][row.id] = {
        id: row.id,
        name: row.name || "",
        category_id: row.category_id || "",
        lat: row.lat != null ? String(row.lat) : "",
        lng: row.lng != null ? String(row.lng) : "",
        desc: row.description || "",
        ...((typeof row.payload === "object" && row.payload !== null) ? row.payload : {}),
      };
    });
    return result;
  } finally {
    conn.release();
  }
}

async function readCache() {
  const raw = await fs.readFile(CACHE_PATH, "utf-8");
  return JSON.parse(raw);
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const endpoints: string[] =
    Array.isArray(body?.endpoints) && body.endpoints.length ? body.endpoints : ENDPOINT_KEYS;
  const tableName = body?.table || DEFAULT_TABLE;

  try {
    const data = await readFromDb(endpoints, tableName);
    return NextResponse.json(data, { status: 200 });
  } catch (err: any) {
    console.warn("Markers API: DB read failed, fallback to cache if available.", err?.message ?? err);
  }

  try {
    const cached = await readCache();
    return NextResponse.json(cached, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to load markers (DB and cache unavailable)" }, { status: 500 });
  }
}
