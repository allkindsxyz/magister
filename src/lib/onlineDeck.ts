import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export type PlaySuit = 'hearts' | 'diamonds' | 'clubs' | 'spades';
export type PlayCard = {
  id: string;
  suit: PlaySuit | 'joker';
  rank: string;
  image: string;
};

const here = path.dirname(fileURLToPath(import.meta.url));
const cardsDir = path.join(here, '../content/cards');

function loadDeck(): PlayCard[] {
  const files = readdirSync(cardsDir).filter((f) => f.endsWith('.json') && f !== 'card-back.json');
  const cards: PlayCard[] = [];
  for (const file of files) {
    const raw = JSON.parse(readFileSync(path.join(cardsDir, file), 'utf8')) as {
      id?: string;
      suit?: PlaySuit;
      joker?: boolean;
      value?: string;
      image?: string;
    };
    if (!raw.id) continue;
    if (raw.joker) {
      cards.push({
        id: raw.id,
        suit: 'joker',
        rank: 'JOKER',
        image: raw.image ?? `/cards/${raw.id}.webp`,
      });
      continue;
    }
    if (!raw.suit || !raw.value) continue;
    cards.push({
      id: raw.id,
      suit: raw.suit,
      rank: raw.value,
      image: raw.image ?? `/cards/${raw.id}.webp`,
    });
  }
  if (cards.length !== 54) {
    console.warn(`onlineDeck: expected 54 cards, got ${cards.length}`);
  }
  return cards;
}

export const ONLINE_DECK = loadDeck();

export function shuffle<T>(items: T[]): T[] {
  const deck = [...items];
  for (let i = deck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}