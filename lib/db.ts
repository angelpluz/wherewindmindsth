import mysql from "mysql2/promise";

const host = process.env.DB_HOST ?? process.env.MYSQL_HOST ?? "localhost";
const port = Number(process.env.DB_PORT ?? process.env.MYSQL_PORT ?? 3306);
const user = process.env.DB_USER ?? process.env.MYSQL_USER;
const password = process.env.DB_PASSWORD ?? process.env.MYSQL_PASSWORD;
const database =
  process.env.DB_NAME ?? process.env.MYSQL_DATABASE ?? process.env.MYSQL_DB ?? "shopdbpython";

// Shared MySQL pool for API handlers
export const pool = mysql.createPool({
  host,
  port,
  user,
  password,
  database,
  waitForConnections: true,
  connectionLimit: 10,
});

export async function query<T = unknown>(sql: string, params: any[] = []) {
  const [rows] = await pool.query<T[]>(sql, params);
  return rows;
}
