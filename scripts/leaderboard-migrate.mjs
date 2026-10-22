#!/usr/bin/env node
/**
 * Import Four Worlds leaderboard entries from JSON into Postgres.
 *
 *   DATABASE_URL=… node scripts/leaderboard-migrate.mjs
 *   DATABASE_URL=… LEADERBOARD_FILE=/data/leaderboard.json node scripts/leaderboard-migrate.mjs
 *
 * On Railway: Shell on the web service (has DATABASE_URL), then run this.
 * If the old JSON lived only in a dead container, copy it out first or skip.
 */
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import pg from 'pg';

const DATABASE_URL = String(process.env.PREORDERS_DATABASE_URL || process.env.DATABASE_URL || '').trim();
const FILE = process.env.LEADERBOARD_FILE
  ? path.resolve(process.env.LEADERBOARD_FILE)
  : path.join(process.cwd(), 'data', 'leaderboard.json');
const MAX_ENTRIES = 50;

if (!DATABASE_URL) {
  console.error('DATABASE_URL is required');
  process.exit(1);
}

const pool = new pg.Pool({
  connectionString: DATABASE_URL,
  ssl:
    DATABASE_URL.includes('localhost') || DATABASE_URL.includes('127.0.0.1')
      ? false
      : { rejectUnauthorized: false },
});

await pool.query(`
  CREATE TABLE IF NOT EXISTS leaderboard_entries (
    name_key TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    ms INTEGER NOT NULL CHECK (ms > 0),
    errors INTEGER,
    at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  );
`);

let raw;
try {
  raw = await readFile(FILE, 'utf8');
} catch (err) {
  if (err.code === 'ENOENT') {
    console.error('No leaderboard file at', FILE);
    console.error('If records were only on ephemeral disk, they are already gone.');
    await pool.end();
    process.exit(1);
  }
  throw err;
}

const data = JSON.parse(raw);
const entries = Array.isArray(data.entries) ? data.entries : [];
let imported = 0;

for (const entry of entries) {
  if (!entry || typeof entry.name !== 'string' || typeof entry.ms !== 'number') continue;
  const name = entry.name
    .normalize('NFKC')
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 24);
  if (!name) continue;
  const ms = Math.round(entry.ms);
  if (!Number.isFinite(ms) || ms <= 0) continue;
  const nameKey = name.toLocaleLowerCase();
  const at = entry.at && !Number.isNaN(Date.parse(entry.at)) ? new Date(entry.at) : new Date();
  const errors =
    typeof entry.errors === 'number' && Number.isInteger(entry.errors) && entry.errors >= 0 && entry.errors <= 999
      ? entry.errors
      : null;

  await pool.query(
    `INSERT INTO leaderboard_entries (name_key, name, ms, errors, at)
     VALUES ($1, $2, $3, $4, $5)
     ON CONFLICT (name_key) DO UPDATE SET
       name = EXCLUDED.name,
       ms = LEAST(leaderboard_entries.ms, EXCLUDED.ms),
       errors = CASE
         WHEN EXCLUDED.ms < leaderboard_entries.ms THEN EXCLUDED.errors
         ELSE leaderboard_entries.errors
       END,
       at = CASE
         WHEN EXCLUDED.ms < leaderboard_entries.ms THEN EXCLUDED.at
         ELSE leaderboard_entries.at
       END`,
    [nameKey, name, ms, errors, at],
  );
  imported += 1;
}

await pool.query(
  `DELETE FROM leaderboard_entries
   WHERE name_key NOT IN (
     SELECT name_key FROM leaderboard_entries
     ORDER BY ms ASC, at ASC
     LIMIT $1
   )`,
  [MAX_ENTRIES],
);

const { rows } = await pool.query(
  `SELECT name, ms, errors, at FROM leaderboard_entries ORDER BY ms ASC, at ASC LIMIT 10`,
);
console.log(`Imported ${imported} entr(y/ies) from ${FILE}`);
console.log('Top 10:');
for (const row of rows) {
  console.log(`  ${row.ms}ms  ${row.name}  errors=${row.errors ?? '—'}  ${row.at.toISOString?.() ?? row.at}`);
}

await pool.end();
