export type PlaySuit = 'hearts' | 'diamonds' | 'clubs' | 'spades';
export type PlayCard = {
  id: string;
  suit: PlaySuit | 'joker';
  rank: string;
  image: string;
};

/** Lightweight faces for online table (see scripts/generate-play-cards.mjs). */
export const ONLINE_CARD_BACK = '/media/card-back-600.webp';

export const ONLINE_PLAY_CARD_DIR = '/cards/play';

export function onlinePlayCardImage(id: string): string {
  return `${ONLINE_PLAY_CARD_DIR}/${id}.webp`;
}

/** Full-size asset for rare discard zoom (not preloaded). */
export function onlineFullCardImage(playImage: string): string {
  if (playImage.startsWith(`${ONLINE_PLAY_CARD_DIR}/`)) {
    return playImage.replace(ONLINE_PLAY_CARD_DIR, '/cards');
  }
  return playImage;
}

type CardJson = {
  id?: string;
  suit?: PlaySuit;
  joker?: boolean;
  value?: string;
  image?: string;
};

const cardModules = import.meta.glob<CardJson>('../content/cards/*.json', {
  eager: true,
  import: 'default',
});

function loadDeck(): PlayCard[] {
  const cards: PlayCard[] = [];
  for (const [file, raw] of Object.entries(cardModules)) {
    if (file.endsWith('card-back.json')) continue;
    if (!raw?.id) continue;
    if (raw.joker) {
      cards.push({
        id: raw.id,
        suit: 'joker',
        rank: 'JOKER',
        image: onlinePlayCardImage(raw.id),
      });
      continue;
    }
    if (!raw.suit || !raw.value) continue;
    cards.push({
      id: raw.id,
      suit: raw.suit,
      rank: raw.value,
      image: onlinePlayCardImage(raw.id),
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