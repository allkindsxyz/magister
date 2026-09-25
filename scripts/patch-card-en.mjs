/**
 * Merge EN fields from import/en-translations.json into src/content/cards/*.json
 * Usage: node scripts/patch-card-en.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const translationsPath = path.join(root, 'import/en-translations.json');
const cardsDir = path.join(root, 'src/content/cards');

const translations = JSON.parse(readFileSync(translationsPath, 'utf8'));
let patched = 0;

for (const [id, en] of Object.entries(translations)) {
  const filePath = path.join(cardsDir, `${id}.json`);
  const card = JSON.parse(readFileSync(filePath, 'utf8'));
  if (en.title) card.title.en = en.title;
  if (en.summary) card.summary.en = en.summary;
  if (en.description) card.description.en = en.description;
  writeFileSync(filePath, `${JSON.stringify(card, null, 2)}\n`, 'utf8');
  patched++;
}

const cyrillic = /[\u0400-\u04FF]/;
const stillRu = [];
for (const f of readdirSync(cardsDir).filter((n) => n.endsWith('.json'))) {
  const card = JSON.parse(readFileSync(path.join(cardsDir, f), 'utf8'));
  if (cyrillic.test(card.description.en)) stillRu.push(card.id);
}

console.log(`Patched ${patched} cards. EN still contains Cyrillic: ${stillRu.length}`);
if (stillRu.length) console.log(stillRu.join(', '));
