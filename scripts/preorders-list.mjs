#!/usr/bin/env node
/**
 * List cart preorders from the JSON store.
 * Usage: node scripts/preorders-list.mjs
 * Optional: PREORDERS_FILE=/data/preorders.json
 */
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const FILE = process.env.PREORDERS_FILE
  ? path.resolve(process.env.PREORDERS_FILE)
  : path.join(process.cwd(), 'data', 'preorders.json');

const raw = await readFile(FILE, 'utf8').catch((err) => {
  if (err.code === 'ENOENT') {
    console.log('No preorders file yet:', FILE);
    process.exit(0);
  }
  throw err;
});

const data = JSON.parse(raw);
const orders = Array.isArray(data.orders) ? data.orders : [];
console.log(`${orders.length} preorder(s) in ${FILE}\n`);

for (const order of [...orders].sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)))) {
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
