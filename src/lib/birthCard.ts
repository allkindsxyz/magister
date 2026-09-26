/**
 * Robert Lee Camp birth-card formula, as taught with his system:
 *   n = 2 × month + day − 55
 *   n = 0            → Joker (31 December)
 *   n = −1 … −52     → card |n| in the fixed order
 *     1–13  hearts  A–K
 *     14–26 clubs   A–K
 *     27–39 diamonds A–K
 *     40–52 spades  A–K
 *
 * Anchors checked against Camp's published assignments:
 *   1 Jan     King of Spades (only date)
 *   3 Jan     Jack of Spades
 *   1 Feb     Jack of Spades (only two dates for that card)
 *   29 Nov    4 of Hearts (one of exactly three: 31 Oct, 29 Nov, 27 Dec)
 *   30 Dec    Ace of Hearts (only date)
 *   31 Dec    Joker
 */

export const CAMP_SUITS = ['hearts', 'clubs', 'diamonds', 'spades'] as const;
export const CAMP_RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'] as const;

export type CampSuit = (typeof CAMP_SUITS)[number];
export type CampRank = (typeof CAMP_RANKS)[number];

const DAYS_IN_MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] as const;

const RANK_SLUG: Record<CampRank, string> = {
  A: 'ace',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  '10': '10',
  J: 'jack',
  Q: 'queen',
  K: 'king',
};

export type BirthCard =
  | { kind: 'joker' }
  | { kind: 'card'; id: string; suit: CampSuit; value: CampRank; number: number };

export function daysInMonth(month: number): number {
  if (month < 1 || month > 12) return 0;
  return DAYS_IN_MONTH[month - 1];
}

export function birthCard(month: number, day: number): BirthCard | null {
  if (!Number.isInteger(month) || !Number.isInteger(day)) return null;
  if (month < 1 || month > 12) return null;
  if (day < 1 || day > daysInMonth(month)) return null;

  const n = 2 * month + day - 55;
  if (n === 0) return { kind: 'joker' };
  if (n > 0 || n < -52) return null;

  const number = -n;
  const suit = CAMP_SUITS[Math.floor((number - 1) / 13)];
  const value = CAMP_RANKS[(number - 1) % 13];
  return {
    kind: 'card',
    id: `${RANK_SLUG[value]}-${suit}`,
    suit,
    value,
    number,
  };
}
