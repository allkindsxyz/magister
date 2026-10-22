import pg from 'pg';

const { Pool } = pg;

/** Railway Postgres URL. Prefer DATABASE_URL from the Postgres plugin. */
export const DATABASE_URL = String(
  process.env.PREORDERS_DATABASE_URL || process.env.DATABASE_URL || '',
).trim();

let pool: pg.Pool | null = null;

export function hasDatabase(): boolean {
  return Boolean(DATABASE_URL);
}

export function getPool(): pg.Pool {
  if (!DATABASE_URL) throw new Error('DATABASE_URL missing');
  if (!pool) {
    pool = new Pool({
      connectionString: DATABASE_URL,
      ssl:
        DATABASE_URL.includes('localhost') || DATABASE_URL.includes('127.0.0.1')
          ? false
          : { rejectUnauthorized: false },
      max: 8,
    });
  }
  return pool;
}
