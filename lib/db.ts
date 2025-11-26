import mysql from "mysql2/promise";

type DbConfig = {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
};

function requiredEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing env: ${key}`);
  }
  return value;
}

function loadConfig(): DbConfig {
  return {
    host: requiredEnv("MYSQL_HOST"),
    port: Number(process.env.MYSQL_PORT ?? 3306),
    user: requiredEnv("MYSQL_USER"),
    password: requiredEnv("MYSQL_PASSWORD"),
    database: requiredEnv("MYSQL_DATABASE"),
  };
}

// Keep a single pool instance across hot reloads.
const globalForPool = global as unknown as { mysqlPool?: mysql.Pool };

function getPool(): mysql.Pool {
  if (!globalForPool.mysqlPool) {
    globalForPool.mysqlPool = mysql.createPool({
      ...loadConfig(),
      connectionLimit: 10,
      waitForConnections: true,
      queueLimit: 0,
      timezone: "Z",
    });
  }
  return globalForPool.mysqlPool;
}

export async function query<T = unknown>(
  sql: string,
  params: unknown[] = [],
): Promise<T[]> {
  const pool = getPool();
  const [rows] = await pool.execute<mysql.RowDataPacket[]>(sql, params);
  return rows as T[];
}

export async function ping(): Promise<void> {
  const pool = getPool();
  await pool.query("SELECT 1");
}

export function pool(): mysql.Pool {
  return getPool();
}
