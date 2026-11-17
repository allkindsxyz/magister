import type { APIRoute } from 'astro';
import type { PlaySuit } from '../../../lib/onlineDeck';
import {
  beginGame,
  chooseSuit,
  drawCard,
  playCard,
  rematchRoom,
  removeBotAtSeat,
  resolveMidGameJoin,
  restartRoom,
  seatForToken,
  setRoomHints,
  touchPresence,
  toClientView,
} from '../../../lib/onlineGame';
import { addOneBot, runBotTurns } from '../../../lib/onlineBots';
import {
  createOnlineRoom,
  deleteOnlineRoom,
  getOnlineRoom,
  saveRoom,
  tryJoinRoom,
} from '../../../lib/onlineRoomStore';
import { getSiteUrl } from '../../../lib/site';

export const prerender = false;

const suits: PlaySuit[] = ['hearts', 'diamonds', 'clubs', 'spades'];

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

function playerToken(body: { playerToken?: unknown }): string | null {
  const t = typeof body.playerToken === 'string' ? body.playerToken.trim() : '';
  return t.length >= 8 && t.length <= 64 ? t : null;
}

function onlineInviteUrl(lang: string, roomId: string): string {
  const path = `/${lang}/app?room=${encodeURIComponent(roomId)}`;
  return new URL(path, getSiteUrl()).href;
}

export const POST: APIRoute = async ({ request, url }) => {
  const raw = await request.text();
  if (raw.length > 4000) return json({ ok: false, error: 'bad_json' }, 400);

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: 'bad_json' }, 400);
  }

  const action = body.action;

  if (action === 'create') {
    const lang = typeof body.lang === 'string' ? body.lang : 'ru';
    const hintsEnabled = body.hintsEnabled !== false && body.hintsEnabled !== 'false';
    const room = createOnlineRoom(lang, hintsEnabled);
    const token = playerToken(body) ?? crypto.randomUUID();
    const name = typeof body.name === 'string' ? body.name : 'Host';
    const join = tryJoinRoom(room.id, token, name);
    if (!join.ok) return json({ ok: false, error: join.error }, 400);
    saveRoom(room);
    const inviteUrl = onlineInviteUrl(lang, room.id);
    return json({
      ok: true,
      roomId: room.id,
      playerToken: token,
      inviteUrl,
      room: toClientView(room, token),
    });
  }

  const roomId = typeof body.roomId === 'string' ? body.roomId.trim().toUpperCase() : '';
  if (!roomId) return json({ ok: false, error: 'no_room' }, 400);

  const room = getOnlineRoom(roomId);
  if (!room) return json({ ok: false, error: 'missing' }, 404);

  if (action === 'join') {
    const token = playerToken(body);
    if (!token) return json({ ok: false, error: 'no_token' }, 400);
    const name = typeof body.name === 'string' ? body.name : '';
    const result = tryJoinRoom(roomId, token, name);
    if (!result.ok) return json({ ok: false, error: result.error }, result.error === 'full' ? 409 : 400);
    runBotTurns(room);
    touchPresence(room, token);
    saveRoom(room);
    return json({
      ok: true,
      seat: result.seat,
      inviteUrl: onlineInviteUrl(room.lang, room.id),
      room: toClientView(room, token),
    });
  }

  if (action === 'state') {
    const token = playerToken(body);
    runBotTurns(room);
    if (token) touchPresence(room, token);
    saveRoom(room);
    return json({
      ok: true,
      inviteUrl: onlineInviteUrl(room.lang, room.id),
      room: toClientView(room, token),
    });
  }

  if (action === 'start') {
    const token = playerToken(body);
    if (!token) return json({ ok: false, error: 'no_token' }, 400);
    const result = beginGame(room, token);
    if (!result.ok) return json({ ok: false, error: result.error }, 400);
    touchPresence(room, token);
    saveRoom(room);
    return json({ ok: true, room: toClientView(room, token) });
  }

  if (action === 'draw') {
    const token = playerToken(body);
    if (!token) return json({ ok: false, error: 'no_token' }, 400);
    const result = drawCard(room, token);
    if (!result.ok) return json({ ok: false, error: result.error }, 400);
    runBotTurns(room);
    touchPresence(room, token);
    saveRoom(room);
    return json({ ok: true, room: toClientView(room, token) });
  }

  if (action === 'play') {
    const token = playerToken(body);
    if (!token) return json({ ok: false, error: 'no_token' }, 400);
    const cardId = typeof body.cardId === 'string' ? body.cardId : '';
    if (!cardId) return json({ ok: false, error: 'no_card' }, 400);
    const result = playCard(room, token, cardId);
    if (!result.ok) return json({ ok: false, error: result.error }, 400);
    runBotTurns(room);
    touchPresence(room, token);
    saveRoom(room);
    return json({ ok: true, needSuit: result.needSuit, room: toClientView(room, token) });
  }

  if (action === 'rematch') {
    const token = playerToken(body);
    if (!token) return json({ ok: false, error: 'no_token' }, 400);
    const result = rematchRoom(room, token);
    if (!result.ok) return json({ ok: false, error: result.error }, 400);
    touchPresence(room, token);
    saveRoom(room);
    return json({ ok: true, room: toClientView(room, token) });
  }

  if (action === 'restart') {
    const token = playerToken(body);
    if (!token) return json({ ok: false, error: 'no_token' }, 400);
    const result = restartRoom(room, token);
    if (!result.ok) return json({ ok: false, error: result.error }, 400);
    touchPresence(room, token);
    saveRoom(room);
    return json({ ok: true, room: toClientView(room, token) });
  }

  if (action === 'close') {
    const token = playerToken(body);
    if (!token) return json({ ok: false, error: 'no_token' }, 400);
    if (seatForToken(room, token) === null) {
      return json({ ok: false, error: 'not_in_room' }, 403);
    }
    deleteOnlineRoom(roomId);
    return json({ ok: true, closed: true });
  }

  if (action === 'addBot') {
    const token = playerToken(body);
    if (!token) return json({ ok: false, error: 'no_token' }, 400);
    if (seatForToken(room, token) === null) {
      return json({ ok: false, error: 'not_in_room' }, 403);
    }
    const result = addOneBot(room);
    if (!result.ok) return json({ ok: false, error: result.error }, 400);
    runBotTurns(room);
    touchPresence(room, token);
    saveRoom(room);
    return json({ ok: true, room: toClientView(room, token) });
  }

  if (action === 'resolveJoin') {
    const token = playerToken(body);
    if (!token) return json({ ok: false, error: 'no_token' }, 400);
    const rawMode = body.mode;
    const mode = rawMode === 'restart' || rawMode === 'wait_next' ? rawMode : null;
    if (!mode) return json({ ok: false, error: 'bad_mode' }, 400);
    const result = resolveMidGameJoin(room, token, mode);
    if (!result.ok) return json({ ok: false, error: result.error }, 400);
    runBotTurns(room);
    touchPresence(room, token);
    saveRoom(room);
    return json({ ok: true, room: toClientView(room, token) });
  }

  if (action === 'setHints') {
    const token = playerToken(body);
    if (!token) return json({ ok: false, error: 'no_token' }, 400);
    const hintsEnabled = body.hintsEnabled !== false && body.hintsEnabled !== 'false';
    const result = setRoomHints(room, token, hintsEnabled);
    if (!result.ok) return json({ ok: false, error: result.error }, 400);
    touchPresence(room, token);
    saveRoom(room);
    return json({ ok: true, room: toClientView(room, token) });
  }

  if (action === 'removeBot') {
    const token = playerToken(body);
    if (!token) return json({ ok: false, error: 'no_token' }, 400);
    const seatRaw = body.seat;
    const seat =
      typeof seatRaw === 'number'
        ? seatRaw
        : typeof seatRaw === 'string'
          ? Number.parseInt(seatRaw, 10)
          : NaN;
    if (!Number.isInteger(seat)) return json({ ok: false, error: 'bad_seat' }, 400);
    const result = removeBotAtSeat(room, token, seat);
    if (!result.ok) return json({ ok: false, error: result.error }, 400);
    touchPresence(room, token);
    saveRoom(room);
    return json({ ok: true, room: toClientView(room, token) });
  }

  if (action === 'chooseSuit') {
    const token = playerToken(body);
    if (!token) return json({ ok: false, error: 'no_token' }, 400);
    const suit = body.suit;
    if (typeof suit !== 'string' || !suits.includes(suit as PlaySuit)) {
      return json({ ok: false, error: 'bad_suit' }, 400);
    }
    const result = chooseSuit(room, token, suit as PlaySuit);
    if (!result.ok) return json({ ok: false, error: result.error }, 400);
    runBotTurns(room);
    touchPresence(room, token);
    saveRoom(room);
    return json({ ok: true, room: toClientView(room, token) });
  }

  return json({ ok: false, error: 'bad_action' }, 400);
};

export const GET: APIRoute = async ({ url }) => {
  const roomId = url.searchParams.get('room')?.trim().toUpperCase() ?? '';
  const token = url.searchParams.get('player')?.trim() ?? null;
  if (!roomId) return json({ ok: false, error: 'no_room' }, 400);
  const room = getOnlineRoom(roomId);
  if (!room) return json({ ok: false, error: 'missing' }, 404);
  runBotTurns(room);
  saveRoom(room);
  return json({
    ok: true,
    inviteUrl: onlineInviteUrl(room.lang, room.id),
    room: toClientView(room, token),
  });
};