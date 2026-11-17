// Builds data.json for the prototype and oracle.ru.csv for editorial review from src/content/oracle/ru.json.
// Usage: node prototypes/ask-magister/build-data.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const cardsDir = join(here, '../../src/content/cards');

const SUITS = ['hearts', 'diamonds', 'clubs', 'spades'];
const RANKS = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
const RANK_CODE = { ace: 'A', jack: 'J', queen: 'Q', king: 'K' };
const SUIT_CODE = { hearts: '♥', diamonds: '♦', clubs: '♣', spades: '♠' };
/* Internal balance axis; never shown to the player. */
const ENERGIES = { move: 'Движение', pause: 'Пауза', release: 'Отпускание', check: 'Проверка' };
const MAX = { message: 130 };
/* "ты … сделал" reads as masculine; the oracle must stay gender-neutral. \b is ASCII-only, hence \p{L} lookarounds. */
const GENDERED_PAST = /(?<!\p{L})ты\s+(?:\S+\s+){0,2}\S+?(?:л|лся)(?!\p{L})/iu;

const oracle = JSON.parse(readFileSync(join(here, '../../src/content/oracle/ru.json'), 'utf8'));
const previous = JSON.parse(readFileSync(join(here, 'oracle.ru.v1.json'), 'utf8'));

const errors = [];
const warnings = [];
const byId = new Map();
for (const row of oracle) {
  if (byId.has(row.id)) errors.push(`duplicate id ${row.id}`);
  byId.set(row.id, row);
  if (!ENERGIES[row.energy]) errors.push(`${row.id}: unknown energy "${row.energy}"`);
  for (const field of Object.keys(MAX)) {
    const value = row[field]?.trim() ?? '';
    if (!value) errors.push(`${row.id}: empty ${field}`);
    if (value.length > MAX[field]) errors.push(`${row.id}: ${field} is ${value.length} chars (max ${MAX[field]})`);
  }
  if (GENDERED_PAST.test(row.message ?? '')) warnings.push(`${row.id}: check gender in message: "${row.message}"`);
}

const cards = [];
for (const suit of SUITS) {
  for (const rank of RANKS) {
    const id = `${rank}-${suit}`;
    const row = byId.get(id);
    if (!row) {
      errors.push(`${id}: missing in src/content/oracle/ru.json`);
      continue;
    }
    const src = JSON.parse(readFileSync(join(cardsDir, `${id}.json`), 'utf8'));
    cards.push({
      id,
      suit,
      code: `${RANK_CODE[rank] ?? rank}${SUIT_CODE[suit]}`,
      title: src.title.ru.trim(),
      world: src.category.ru.trim(),
      image: src.image,
      energy: row.energy,
      message: row.message.trim(),
      story: src.description.ru
        .split(/\n+/)
        .map((p) => p.trim())
        .filter(Boolean),
    });
  }
}
for (const id of byId.keys()) {
  if (!cards.some((c) => c.id === id)) errors.push(`${id}: not a deck card`);
}

if (warnings.length) console.warn(warnings.join('\n'));
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

writeFileSync(join(here, 'data.json'), JSON.stringify(cards));

const csvCell = (v) => `"${String(v).replace(/"/g, '""')}"`;
const header = ['№', 'Карта', 'Название', 'Мир', 'Энергия', 'Послание', 'Было (v1)'];
const lines = cards.map((c, i) =>
  [i + 1, c.code, c.title, c.world, ENERGIES[c.energy], c.message, previous[c.id] ?? '']
    .map(csvCell)
    .join(';'),
);
// BOM + semicolons so Excel with a Russian locale opens it without an import wizard.
writeFileSync(join(here, 'oracle.ru.csv'), `\uFEFF${[header.map(csvCell).join(';'), ...lines].join('\r\n')}\r\n`);

const tally = { total: Object.fromEntries(Object.keys(ENERGIES).map((e) => [e, 0])) };
for (const c of cards) {
  tally[c.suit] ??= Object.fromEntries(Object.keys(ENERGIES).map((e) => [e, 0]));
  tally[c.suit][c.energy]++;
  tally.total[c.energy]++;
}
console.log(`${cards.length} cards written`);
console.table(tally);
