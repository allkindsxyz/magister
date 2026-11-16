import type { APIRoute } from 'astro';
import type { PlaySuit } from '../../../lib/onlineDeck';
import {
  beginGame,
  chooseSuit,
  drawCard,
  playCard,
  rematchRoom,
  restartRoom,
  seatForToken,
  touchPresence,
  toClientView,
} from '../../../lib/onlineGame';
import { addOneBot, runBotTurns } from '../../../lib/onlineBots';
import {
  createOnlineRoom,
  getOnlineRoom,
  saveRoom,
  tryJoinRoom,
} from '../../../lib/onlineRoomStore';

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
    const room = createOnlineRoom(lang);
    const token = playerToken(body) ?? crypto.randomUUID();
    const name = typeof body.name === 'string' ? body.name : 'Host';
    const join = tryJoinRoom(room.id, token, name);
    if (!join.ok) return json({ ok: false, error: join.error }, 400);
    saveRoom(room);
    const invitePath = `/${lang}/app?room=${room.id}`;
    const inviteUrl = new URL(invitePath, url.origin).href;
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
    return json({ ok: true, seat: result.seat, room: toClientView(room, token) });
  }

  if (action === 'state') {
    const token = playerToken(body);
    runBotTurns(room);
    if (token) touchPresence(room, token);
    saveRoom(room);
    return json({ ok: true, room: toClientView(room, token) });
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
  return json({ ok: true, room: toClientView(room, token) });
};