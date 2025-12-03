// Fetch marker data from the external worker API and cache it locally.
// Usage: node scripts/fetch-markers.js

import fs from "fs/promises";
import path from "path";

const API_BASE = "https://autumn-dream-8c07.square-spon.workers.dev";
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
  "Gib-a-Gab",
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

const CACHE_PATH = path.join(process.cwd(), "public", "data", "markers-cache.json");

async function fetchBatch() {
  const resp = await fetch(`${API_BASE}/batch`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ endpoints: ENDPOINT_KEYS }),
  });
  if (!resp.ok) {
    throw new Error(`API error ${resp.status}`);
  }
  return resp.json();
}

async function main() {
  console.log("Fetching markers from worker API...");
  const data = await fetchBatch();
  await fs.mkdir(path.dirname(CACHE_PATH), { recursive: true });
  await fs.writeFile(CACHE_PATH, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Saved cache to ${CACHE_PATH}`);
}

main().catch((err) => {
  console.error("Failed to fetch markers:", err);
  process.exit(1);
});
