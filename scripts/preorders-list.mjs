#!/usr/bin/env node
/**
 * List cart preorders.
 *
 * Postgres (preferred on Railway):
 *   DATABASE_URL=… node scripts/preorders-list.mjs
 *
 * File fallback:
 *   PREORDERS_FILE=/data/preorders.json node scripts/preorders-list.mjs
 *   node scripts/preorders-list.mjs
 */
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import pg from 'pg';

const DATABASE_URL = String(process.env.PREORDERS_DATABASE_URL || process.env.DATABASE_URL || '').trim();
const FILE = process.env.PREORDERS_FILE
  ? path.resolve(process.env.PREORDERS_FILE)
  : path.join(process.cwd(), 'data', 'preorders.json');

function printOrders(orders, source) {
  console.log(`${orders.length} preorder(s) via ${source}\n`);
  for (const order of orders) {
    const lines = (order.lines || [])
      .map((l) => `${l.qty}× ${l.sku}${l.cardTitle ? ` (${l.cardTitle})` : ''}`)
      .join(', ');
    console.log(
      [
        order.id,
        order.status,
        order.createdAt,
        order.email,
        order.name || '—',
        `€${order.subtotal}`,
        lines,
        order.note ? `note: ${order.note}` : '',
      ]
        .filter(Boolean)
        .join(' | '),
    );
  }
}

if (DATABASE_URL) {
  const pool = new pg.Pool({
    connectionString: DATABASE_URL,
    ssl:
      DATABASE_URL.includes('localhost') || DATABASE_URL.includes('127.0.0.1')
        ? false
        : { rejectUnauthorized: false },
  });
  await pool.query(`
    CREATE TABLE IF NOT EXISTS preorders (
      id TEXT PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      email TEXT NOT NULL,
      name TEXT,
      note TEXT,
      lang TEXT NOT NULL,
      currency TEXT NOT NULL DEFAULT 'EUR',
      subtotal NUMERIC(12, 2) NOT NULL,
      lines JSONB NOT NULL,
      status TEXT NOT NULL DEFAULT 'new',
      source TEXT NOT NULL DEFAULT 'cart'
    );
  `);
  const { rows } = await pool.query(
    `SELECT id, created_at AS "createdAt", email, name, note, lang, currency, subtotal, lines, status, source
     FROM preorders
     ORDER BY created_at DESC`,
  );
  printOrders(
    rows.map((r) => ({
      ...r,
      createdAt: new Date(r.createdAt).toISOString(),
      subtotal: Number(r.subtotal),
    })),
    'postgres',
  );
  await pool.end();
  process.exit(0);
}

const raw = await readFile(FILE, 'utf8').catch((err) => {
  if (err.code === 'ENOENT') {
    console.log('No DATABASE_URL and no preorders file yet:', FILE);
    process.exit(0);
  }
  throw err;
});

const data = JSON.parse(raw);
const orders = Array.isArray(data.orders) ? data.orders : [];
printOrders(
  [...orders].sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt))),
  FILE,
);
