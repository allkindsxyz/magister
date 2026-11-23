import {
  canPlayOnTop,
  chooseSuit,
  drawCard,
  firstFreeSeat,
  joinRoom,
  playCard,
  syncActiveTurnSeat,
  type RoomState,
} from './onlineGame';
import type { PlayCard, PlaySuit } from './onlineDeck';
import { BOT_TOKEN_PREFIX } from './onlineConstants';

/** Dev/testing: auto-fill empty seats with bots when the host creates a table. */
export const AUTO_FILL_BOTS = true;

export function isBotToken(token: string): boolean {
  return token.startsWith(BOT_TOKEN_PREFIX);
}

function botNames(lang: string): string[] {
  const map: Record<string, string[]> = {
    ru: ['Бот Алиса', 'Бот Борис', 'Бот Вика'],
    en: ['Bot Alice', 'Bot Bob', 'Bot Vera'],
    be: ['Бот Аліса', 'Бот Барыс', 'Бот Вікторыя'],
    zh: ['机器人甲', '机器人乙', '机器人丙'],
  };
  return map[lang] ?? map.en!;
}

function pickSuit(): PlaySuit {
  const suits: PlaySuit[] = ['hearts', 'diamonds', 'clubs', 'spades'];
  return suits[Math.floor(Math.random() * suits.length)]!;
}

/** After a joker: match the last card’s suit when one card remains (finish on the next turn). */
function pickSuitForBot(room: RoomState, seat: number): PlaySuit {
  const hand = room.hands[seat];
  if (hand?.length === 1) {
    const last = hand[0]!;
    if (last.suit !== 'joker') return last.suit;
  }
  return pickSuit();
}

function pickCardToPlay(hand: PlayCard[], top: NonNullable<RoomState['discardTop']>): PlayCard | null {
  const playable = hand.filter((c) => canPlayOnTop(c, top));
  if (playable.length === 0) return null;
  const withoutJoker = playable.filter((c) => c.suit !== 'joker');
  const pool = withoutJoker.length > 0 ? withoutJoker : playable;
  return pool[Math.floor(Math.random() * pool.length)]!;
}

export function addOneBot(room: RoomState): { ok: boolean; error?: string } {
  if (!AUTO_FILL_BOTS) return { ok: false, error: 'disabled' };
  const seat = firstFreeSeat(room);
  if (seat === null) return { ok: false, error: 'full' };
  const used = new Set(
    room.seats.filter(Boolean).map((s) => s!.name.toLowerCase()),
  );
  const names = botNames(room.lang);
  const pick =
    names.find((n) => !used.has(n.toLowerCase())) ??
    `Bot ${seat + 1}`;
  const token = `${BOT_TOKEN_PREFIX}${room.id}-s${seat}-${seat}`;
  const join = joinRoom(room, token, pick);
  if (!join.ok) return { ok: false, error: join.error };
  return { ok: true };
}

export function fillTestBots(room: RoomState): void {
  if (!AUTO_FILL_BOTS) return;
  const names = botNames(room.lang);
  let nameIdx = 0;
  for (let seat = 0; seat < room.seats.length; seat += 1) {
    if (room.seats[seat]) continue;
    const token = `${BOT_TOKEN_PREFIX}${room.id}-s${seat}`;
    const name = names[nameIdx] ?? `Bot ${seat + 1}`;
    nameIdx += 1;
    joinRoom(room, token, name);
  }
}

/**
 * Run bot turns until a human must act or the hand ends.
 * Call after mutations and on state polling so bots keep the game moving.
 */
export function runBotTurns(room: RoomState, maxSteps = 64): void {
  if (!AUTO_FILL_BOTS || room.phase !== 'playing') return;
  syncActiveTurnSeat(room);

  for (let step = 0; step < maxSteps; step += 1) {
    if (room.phase !== 'playing') return;

    if (room.pendingSuitSeat !== null) {
      const seat = room.pendingSuitSeat;
      const token = room.seats[seat]?.token;
      if (!token || !isBotToken(token)) return;
      const res = chooseSuit(room, token, pickSuitForBot(room, seat));
      if (!res.ok) return;
      continue;
    }

    const turn = room.turnSeat;
    if (turn === null) return;
    const token = room.seats[turn]?.token;
    if (!token || !isBotToken(token)) return;

    const top = room.discardTop;
    if (!top) return;

    const card = pickCardToPlay(room.hands[turn]!, top);
    if (card) {
      const res = playCard(room, token, card.id);
      if (!res.ok) {
        drawCard(room, token);
      } else if (room.pendingSuitSeat === turn) {
        chooseSuit(room, token, pickSuitForBot(room, turn));
      }
    } else {
      drawCard(room, token);
    }
  }
}