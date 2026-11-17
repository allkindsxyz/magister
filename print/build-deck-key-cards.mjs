#!/usr/bin/env node
/**
 * Embeds full-deck key faces (26 + 26) into suit-key-card-mockup.html
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const cardsDir = path.join(repoRoot, "src/content/cards");
const i18nPath = path.join(repoRoot, "src/i18n/ru.json");
const htmlPath = path.join(__dirname, "suit-key-card-mockup.html");

/** Matches `value` in card JSON (A, 2–10, J, Q, K). */
const RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const SUIT_SYMBOL = {
  hearts: "♥",
  diamonds: "♦",
  clubs: "♣",
  spades: "♠",
};

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;");
}

function loadWorlds() {
  const { worlds } = JSON.parse(fs.readFileSync(i18nPath, "utf8"));
  return worlds;
}

function loadPlayingCards() {
  return fs
    .readdirSync(cardsDir)
    .filter(
      (file) =>
        file.endsWith(".json") &&
        file !== "card-back.json" &&
        !file.startsWith("joker"),
    )
    .map((file) =>
      JSON.parse(fs.readFileSync(path.join(cardsDir, file), "utf8")),
    );
}

function cardsForSuit(allCards, suit) {
  return allCards
    .filter((card) => card.suit === suit)
    .sort((a, b) => RANKS.indexOf(a.value) - RANKS.indexOf(b.value));
}

function renderCell(card) {
  const sym = SUIT_SYMBOL[card.suit];
  const rank = card.value;
  const name = escapeHtml(card.title.ru);
  const img = `assets/deck/${card.id}.webp`;

  return `            <div class="deck-cell">
              <div class="deck-cell__frame"><img src="${img}" alt="" width="280" height="392" decoding="async" /></div>
              <p class="deck-cell__label">
                <span class="card-index">${rank}<span class="card-index__suit card-index__suit--${card.suit}">${sym}</span></span>
                <span class="deck-cell__name">${name}</span>
              </p>
            </div>`;
}

function renderIntro(suit, worlds) {
  const sym = SUIT_SYMBOL[suit];
  const world = worlds[suit];
  const title = escapeHtml(world.name);
  const blurb = escapeHtml(world.blurb);

  return `            <div class="deck-cell deck-cell--intro">
              <div class="deck-cell__frame deck-cell__frame--text">
                <h3 class="deck-suit-intro__title"><span class="deck-suit-intro__symbol" aria-hidden="true">${sym}</span> ${title}</h3>
                <p class="deck-suit-intro__blurb">${blurb}</p>
              </div>
              <p class="deck-cell__label deck-cell__label--align" aria-hidden="true">
                <span class="card-index deck-cell__label-ph">&nbsp;</span>
                <span class="deck-cell__name deck-cell__label-ph">&nbsp;</span>
              </p>
            </div>`;
}

function renderSuitBlock(suit, allCards, worlds) {
  const cards = cardsForSuit(allCards, suit);
  const row1 = cards.slice(0, 6).map(renderCell).join("\n");
  const row2 = cards.slice(6, 13).map(renderCell).join("\n");

  return `        <section class="deck-suit-block deck-suit-block--${suit}">
          <div class="deck-suit-layout">
${renderIntro(suit, worlds)}
${row1}
${row2}
          </div>
        </section>`;
}

function renderFace(suits, title, modifier) {
  const allCards = loadPlayingCards();
  const worlds = loadWorlds();
  const blocks = suits
    .map((suit) => renderSuitBlock(suit, allCards, worlds))
    .join("\n");

  return `    <figure class="card card--deck-index ${modifier}" aria-label="${escapeHtml(title)}">
      <header class="card-head card-head--deck">
        <h2>${escapeHtml(title)}</h2>
      </header>
      <div class="deck-body">
${blocks}
      </div>
    </figure>`;
}

const generated = [
  renderFace(
    ["hearts", "diamonds"],
    "Ключ колоды · червы и бубны",
    "card--deck-red",
  ),
  renderFace(
    ["clubs", "spades"],
    "Ключ колоды · трефы и пики",
    "card--deck-black",
  ),
].join("\n\n");

const html = fs.readFileSync(htmlPath, "utf8");
const start = "<!-- deck-key:generated:start -->";
const end = "<!-- deck-key:generated:end -->";

if (!html.includes(start) || !html.includes(end)) {
  console.error("Markers not found in suit-key-card-mockup.html");
  process.exit(1);
}

const next = html.replace(
  new RegExp(`${start}[\\s\\S]*${end}`),
  `${start}\n${generated}\n    ${end}`,
);

fs.writeFileSync(htmlPath, next);
console.log("Updated deck key faces in suit-key-card-mockup.html (52 cells).");
