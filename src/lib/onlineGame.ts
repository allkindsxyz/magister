import { ONLINE_DECK, shuffle, type PlayCard, type PlaySuit } from './onlineDeck';
import {
  BOT_TOKEN_PREFIX,
  HAND_SIZE,
  MIN_PLAYERS,
  ONLINE_PRESENCE_MS,
  SEATS,
} from './onlineConstants';

export { HAND_SIZE, MIN_PLAYERS, SEATS } from './onlineConstants';

export function seatedCount(room: RoomState): number {
  return room.seats.filter(Boolean).length;
}

export function occupiedSeatIndices(room: RoomState): number[] {
  const out: number[] = [];
  for (let i = 0; i < room.seats.length; i += 1) {
    if (room.seats[i]) out.push(i);
  }
  return out;
}

export type DiscardTop = PlayCard & {
  chosenSuit: PlaySuit | null;
};

export type RoomPhase = 'lobby' | 'playing' | 'finished';

export type RoomActionEvent = {
  version: number;
  kind: 'play' | 'draw' | 'reshuffle';
  seat: number;
  image: string | null;
  /** Set after joker play when suit is chosen (human or bot). */
  chosenSuit?: PlaySuit | null;
  /** Cards moved from discard (under top) into the draw pile */
  recycled?: number;
};

export type PlayerSeat = {
  token: string;
  name: string;
  connectedAt: number;
  /** Updated on poll and actions; used for presence dots. */
  lastSeenAt: number;
};

export type RoomState = {
  id: string;
  createdAt: number;
  lang: string;
  phase: RoomPhase;
  seats: (PlayerSeat | null)[];
  hands: PlayCard[][];
  drawPile: PlayCard[];
  discard: PlayCard[];
  discardTop: DiscardTop | null;
  turnSeat: number | null;
  winnerSeat: number | null;
  pendingSuitSeat: number | null;
  version: number;
  events: RoomActionEvent[];
  /** Wins per seat index; persists across rematches in the same room. */
  wins: number[];
};

export function createRoomId(): string {
  const alphabet = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  let out = '';
  for (let i = 0; i < 8; i += 1) {
    out += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return out;
}

export function newRoom(id: string, lang: string): RoomState {
  return {
    id,
    createdAt: Date.now(),
    lang,
    phase: 'lobby',
    seats: [null, null, null, null],
    hands: [[], [], [], []],
    drawPile: [],
    discard: [],
    discardTop: null,
    turnSeat: null,
    winnerSeat: null,
    pendingSuitSeat: null,
    version: 0,
    events: [],
    wins: [0, 0, 0, 0],
  };
}

function crownWinner(room: RoomState, seat: number): void {
  room.winnerSeat = seat;
  room.phase = 'finished';
  room.pendingSuitSeat = null;
  if (room.wins.length < SEATS) {
    room.wins = [...room.wins, ...Array(SEATS - room.wins.length).fill(0)];
  }
  room.wins[seat]! += 1;
}

export function firstFreeSeat(room: RoomState): number | null {
  const idx = room.seats.findIndex((s) => s === null);
  return idx >= 0 ? idx : null;
}

export function seatForToken(room: RoomState, token: string): number | null {
  const idx = room.seats.findIndex((s) => s?.token === token);
  return idx >= 0 ? idx : null;
}

export function joinRoom(room: RoomState, token: string, name: string): { ok: true; seat: number } | { ok: false; error: string } {
  const now = Date.now();
  const existing = seatForToken(room, token);
  if (existing !== null) {
    const prev = room.seats[existing]!;
    room.seats[existing] = {
      token,
      name: name.trim() || prev.name,
      connectedAt: prev.connectedAt,
      lastSeenAt: now,
    };
    return { ok: true, seat: existing };
  }
  const seat = firstFreeSeat(room);
  if (seat === null) return { ok: false, error: 'full' };
  room.seats[seat] = {
    token,
    name: name.trim() || `Player ${seat + 1}`,
    connectedAt: now,
    lastSeenAt: now,
  };
  bump(room);
  return { ok: true, seat };
}

export function touchPresence(room: RoomState, token: string): void {
  const seat = seatForToken(room, token);
  if (seat === null) return;
  const s = room.seats[seat];
  if (!s) return;
  room.seats[seat] = { ...s, lastSeenAt: Date.now() };
}

function seatIsOnline(seat: PlayerSeat, now = Date.now()): boolean {
  if (isBotToken(seat.token)) return true;
  const seen = seat.lastSeenAt ?? seat.connectedAt;
  return now - seen < ONLINE_PRESENCE_MS;
}

export function beginGame(room: RoomState, token: string): { ok: boolean; error?: string } {
  if (room.phase !== 'lobby') return { ok: false, error: 'not_lobby' };
  if (seatedCount(room) < MIN_PLAYERS) return { ok: false, error: 'need_players' };
  const seat = seatForToken(room, token);
  if (seat === null) return { ok: false, error: 'not_in_room' };
  startGame(room, seat);
  return { ok: true };
}

function bump(room: RoomState): void {
  room.version += 1;
}

function patchLastPlayEventChosenSuit(room: RoomState, seat: number, suit: PlaySuit): void {
  for (let i = room.events.length - 1; i >= 0; i -= 1) {
    const ev = room.events[i]!;
    if (ev.kind === 'play' && ev.seat === seat) {
      ev.chosenSuit = suit;
      return;
    }
  }
}

const MAX_ACTION_EVENTS = 48;

function pushAction(
  room: RoomState,
  kind: RoomActionEvent['kind'],
  seat: number,
  image: string | null,
  extra?: Pick<RoomActionEvent, 'recycled'>,
): void {
  room.events.push({
    version: room.version,
    kind,
    seat,
    image,
    ...(extra?.recycled !== undefined ? { recycled: extra.recycled } : {}),
  });
  if (room.events.length > MAX_ACTION_EVENTS) {
    room.events.splice(0, room.events.length - MAX_ACTION_EVENTS);
  }
}

/** When draw pile is empty, shuffle all discard cards except the visible top back into the deck. */
function recycleDiscardIntoDrawPile(room: RoomState, triggeredBySeat: number): boolean {
  if (room.drawPile.length > 0) return true;
  if (!room.discardTop) return false;

  if (room.discard.length === 0) {
    room.discard = [{ ...room.discardTop }];
  }

  if (room.discard.length <= 1) return false;

  const top = room.discard[room.discard.length - 1]!;
  if (top.id !== room.discardTop.id) {
    const fixIdx = room.discard.findIndex((c) => c.id === room.discardTop!.id);
    if (fixIdx >= 0) {
      const [canonical] = room.discard.splice(fixIdx, 1);
      if (canonical) room.discard.push(canonical);
    } else {
      room.discard.push({ ...room.discardTop });
    }
  }

  const visibleTop = room.discard.pop()!;
  const chosenSuit = room.discardTop.chosenSuit;
  const under = room.discard;
  if (under.length === 0) {
    room.discard = [visibleTop];
    return false;
  }

  room.drawPile = shuffle(under);
  room.discard = [visibleTop];
  room.discardTop = {
    ...visibleTop,
    chosenSuit:
      visibleTop.suit === 'joker' ? chosenSuit ?? pickRandomSuit() : null,
  };

  bump(room);
  pushAction(room, 'reshuffle', triggeredBySeat, null, { recycled: under.length });
  return true;
}

function effectiveSuit(top: DiscardTop): PlaySuit | null {
  if (top.suit === 'joker') return top.chosenSuit;
  return top.suit;
}

export function canPlayOnTop(card: PlayCard, top: DiscardTop): boolean {
  if (card.suit === 'joker') return true;
  const suit = effectiveSuit(top);
  if (!suit) return true;
  return card.rank === top.rank || card.suit === suit;
}

function flipDiscardStarter(room: RoomState): void {
  let card = room.drawPile.pop();
  while (card && card.suit === 'joker' && room.drawPile.length) {
    room.discard.push(card);
    card = room.drawPile.pop();
  }
  if (!card) return;
  room.discard.push(card);
  room.discardTop = {
    ...card,
    chosenSuit: card.suit === 'joker' ? pickRandomSuit() : null,
  };
}

function pickRandomSuit(): PlaySuit {
  const suits: PlaySuit[] = ['hearts', 'diamonds', 'clubs', 'spades'];
  return suits[Math.floor(Math.random() * suits.length)];
}

export function startGame(room: RoomState, firstTurnSeat?: number): void {
  if (room.phase !== 'lobby' && room.phase !== 'finished' && room.phase !== 'playing') return;
  const occ = occupiedSeatIndices(room);
  if (occ.length < MIN_PLAYERS) return;

  room.events = [];
  room.winnerSeat = null;
  room.pendingSuitSeat = null;

  const pile = shuffle(ONLINE_DECK.map((c) => ({ ...c })));
  room.hands = Array.from({ length: SEATS }, () => []);
  for (let r = 0; r < HAND_SIZE; r += 1) {
    for (const s of occ) {
      const card = pile.pop();
      if (card) room.hands[s]!.push(card);
    }
  }
  room.drawPile = pile;
  room.discard = [];
  room.discardTop = null;
  flipDiscardStarter(room);
  if (firstTurnSeat !== undefined && occ.includes(firstTurnSeat)) {
    room.turnSeat = firstTurnSeat;
  } else {
    room.turnSeat = occ[Math.floor(Math.random() * occ.length)]!;
  }
  room.pendingSuitSeat = null;
  room.winnerSeat = null;
  room.phase = 'playing';
  bump(room);
}

export function rematchRoom(room: RoomState, token: string): { ok: boolean; error?: string } {
  const seat = seatForToken(room, token);
  if (seat === null) return { ok: false, error: 'not_in_room' };
  if (room.phase !== 'finished') return { ok: false, error: 'not_finished' };
  returnRoomToLobby(room);
  return { ok: true };
}

function returnRoomToLobby(room: RoomState): void {
  room.phase = 'lobby';
  room.events = [];
  room.hands = Array.from({ length: SEATS }, () => []);
  room.drawPile = [];
  room.discard = [];
  room.discardTop = null;
  room.turnSeat = null;
  room.winnerSeat = null;
  room.pendingSuitSeat = null;
  bump(room);
}

function isBotToken(token: string): boolean {
  return token.startsWith(BOT_TOKEN_PREFIX);
}

/** Lobby, humans only, wins cleared — tap the deck when ready. */
export function restartRoom(room: RoomState, token: string): { ok: boolean; error?: string } {
  const seat = seatForToken(room, token);
  if (seat === null) return { ok: false, error: 'not_in_room' };
  const self = room.seats[seat];
  if (!self || isBotToken(self.token)) return { ok: false, error: 'not_in_room' };

  for (let i = 0; i < room.seats.length; i += 1) {
    const s = room.seats[i];
    if (s && isBotToken(s.token)) room.seats[i] = null;
  }

  room.wins = [0, 0, 0, 0];
  returnRoomToLobby(room);
  return { ok: true };
}

/** Lobby only — clear a single bot seat before the hand starts. */
export function removeBotAtSeat(
  room: RoomState,
  token: string,
  targetSeat: number,
): { ok: boolean; error?: string } {
  if (room.phase !== 'lobby') return { ok: false, error: 'not_lobby' };
  if (seatForToken(room, token) === null) return { ok: false, error: 'not_in_room' };
  if (targetSeat < 0 || targetSeat >= SEATS) return { ok: false, error: 'bad_seat' };
  const target = room.seats[targetSeat];
  if (!target || !isBotToken(target.token)) return { ok: false, error: 'not_bot' };
  room.seats[targetSeat] = null;
  bump(room);
  return { ok: true };
}

/** Next occupied seat clockwise (indices increase: bottom → left → center → right …). */
function nextTurn(room: RoomState): void {
  if (room.turnSeat === null) return;
  let seat = (room.turnSeat + 1) % SEATS;
  for (let step = 0; step < SEATS; step += 1) {
    if (room.seats[seat]) {
      room.turnSeat = seat;
      return;
    }
    seat = (seat + 1) % SEATS;
  }
}

function drawOne(room: RoomState, seat: number): PlayCard | null {
  if (room.drawPile.length === 0 && !recycleDiscardIntoDrawPile(room, seat)) {
    return null;
  }
  const card = room.drawPile.pop();
  if (card) room.hands[seat].push(card);
  return card ?? null;
}

export function drawCard(room: RoomState, token: string): { ok: boolean; error?: string } {
  if (room.phase !== 'playing') return { ok: false, error: 'not_playing' };
  const seat = seatForToken(room, token);
  if (seat === null) return { ok: false, error: 'not_in_room' };
  if (room.pendingSuitSeat !== null) return { ok: false, error: 'choose_suit' };
  if (room.turnSeat !== seat) return { ok: false, error: 'not_your_turn' };
  drawOne(room, seat);
  nextTurn(room);
  bump(room);
  pushAction(room, 'draw', seat, null);
  return { ok: true };
}

export function playCard(
  room: RoomState,
  token: string,
  cardId: string,
): { ok: boolean; error?: string; needSuit?: boolean } {
  if (room.phase !== 'playing') return { ok: false, error: 'not_playing' };
  const seat = seatForToken(room, token);
  if (seat === null) return { ok: false, error: 'not_in_room' };
  if (room.pendingSuitSeat !== null && room.pendingSuitSeat !== seat) {
    return { ok: false, error: 'choose_suit' };
  }
  if (room.pendingSuitSeat === seat) return { ok: false, error: 'choose_suit' };
  if (room.turnSeat !== seat) return { ok: false, error: 'not_your_turn' };
  if (!room.discardTop) return { ok: false, error: 'no_discard' };

  const hand = room.hands[seat];
  const idx = hand.findIndex((c) => c.id === cardId);
  if (idx < 0) return { ok: false, error: 'no_card' };
  const card = hand[idx]!;
  if (!canPlayOnTop(card, room.discardTop)) return { ok: false, error: 'illegal' };

  hand.splice(idx, 1);
  room.discard.push(card);

  if (card.suit === 'joker') {
    room.discardTop = { ...card, chosenSuit: null };
    room.pendingSuitSeat = seat;
    bump(room);
    pushAction(room, 'play', seat, card.image);
    if (hand.length === 0) {
      crownWinner(room, seat);
    }
    return { ok: true, needSuit: hand.length > 0 };
  }

  room.discardTop = { ...card, chosenSuit: null };
  room.pendingSuitSeat = null;

  if (hand.length === 0) {
    crownWinner(room, seat);
    bump(room);
    pushAction(room, 'play', seat, card.image);
    return { ok: true };
  }

  nextTurn(room);
  bump(room);
  pushAction(room, 'play', seat, card.image);
  return { ok: true };
}

export function chooseSuit(room: RoomState, token: string, suit: PlaySuit): { ok: boolean; error?: string } {
  if (room.phase !== 'playing') return { ok: false, error: 'not_playing' };
  const seat = seatForToken(room, token);
  if (seat === null) return { ok: false, error: 'not_in_room' };
  if (room.pendingSuitSeat !== seat) return { ok: false, error: 'not_pending' };
  if (!room.discardTop) return { ok: false, error: 'no_discard' };

  room.discardTop = { ...room.discardTop, chosenSuit: suit };
  room.pendingSuitSeat = null;
  patchLastPlayEventChosenSuit(room, seat, suit);

  if (room.hands[seat].length === 0) {
    crownWinner(room, seat);
    bump(room);
    return { ok: true };
  }

  nextTurn(room);
  bump(room);
  return { ok: true };
}

export type PublicCard = Pick<PlayCard, 'id' | 'suit' | 'rank' | 'image'>;

export type ClientRoomView = {
  id: string;
  phase: RoomPhase;
  version: number;
  events: RoomActionEvent[];
  youSeat: number | null;
  seats: ({ name: string; handCount: number; online: boolean; isBot: boolean } | null)[];
  deckCount: number;
  topDiscard: DiscardTop | null;
  turnSeat: number | null;
  pendingSuitSeat: number | null;
  winnerSeat: number | null;
  yourHand: PublicCard[] | null;
  isYourTurn: boolean;
  needChooseSuit: boolean;
  /** Lobby with enough seated players — game starts when someone taps the deck. */
  readyToStart: boolean;
  seatedCount: number;
  maxSeats: number;
  wins: number[];
};

export function toClientView(room: RoomState, token: string | null): ClientRoomView {
  const youSeat = token ? seatForToken(room, token) : null;
  const now = Date.now();
  return {
    id: room.id,
    phase: room.phase,
    version: room.version,
    events: room.events.map((e) => ({ ...e })),
    youSeat,
    seats: room.seats.map((s, i) =>
      s
        ? {
            name: s.name,
            handCount: room.phase === 'playing' || room.phase === 'finished' ? room.hands[i].length : 0,
            online: seatIsOnline(s, now),
            isBot: isBotToken(s.token),
          }
        : null,
    ),
    deckCount: room.drawPile.length,
    topDiscard: room.discardTop,
    turnSeat: room.turnSeat,
    pendingSuitSeat: room.pendingSuitSeat,
    winnerSeat: room.winnerSeat,
    yourHand: youSeat !== null ? room.hands[youSeat].map((c) => ({ ...c })) : null,
    isYourTurn: youSeat !== null && room.turnSeat === youSeat && room.phase === 'playing',
    needChooseSuit: youSeat !== null && room.pendingSuitSeat === youSeat,
    readyToStart: room.phase === 'lobby' && seatedCount(room) >= MIN_PLAYERS,
    seatedCount: seatedCount(room),
    maxSeats: SEATS,
    wins:
      room.wins?.length >= SEATS
        ? room.wins.slice(0, SEATS)
        : [...room.wins, ...Array(Math.max(0, SEATS - room.wins.length)).fill(0)],
  };
}