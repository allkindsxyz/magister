import { createRoomId, joinRoom, newRoom, SEATS, type RoomState } from './onlineGame';

const rooms = new Map<string, RoomState>();
const ROOM_TTL_MS = 6 * 60 * 60 * 1000;

function prune(): void {
  const now = Date.now();
  for (const [id, room] of rooms) {
    if (now - room.createdAt > ROOM_TTL_MS && room.phase === 'lobby') {
      rooms.delete(id);
    }
  }
}

export function createOnlineRoom(lang: string, hintsEnabled = true): RoomState {
  prune();
  let id = createRoomId();
  while (rooms.has(id)) id = createRoomId();
  const room = newRoom(id, lang, hintsEnabled);
  rooms.set(id, room);
  return room;
}

export function getOnlineRoom(id: string): RoomState | undefined {
  const room = rooms.get(id.toUpperCase());
  if (room) {
    if (!room.wins?.length) {
      room.wins = Array.from({ length: SEATS }, () => 0);
    } else if (room.wins.length < SEATS) {
      room.wins = [...room.wins, ...Array(SEATS - room.wins.length).fill(0)];
    } else if (room.wins.length > SEATS) {
      room.wins = room.wins.slice(0, SEATS);
    }
  }
  if (room && room.hintsEnabled === undefined) room.hintsEnabled = true;
  if (room && !room.pendingMidGameJoins) room.pendingMidGameJoins = [];
  if (room && room.rematchAtTable === undefined) room.rematchAtTable = [];
  if (room && room.rematchGathering === undefined) room.rematchGathering = false;
  return room;
}

export function saveRoom(room: RoomState): void {
  rooms.set(room.id, room);
}

export function deleteOnlineRoom(id: string): boolean {
  prune();
  return rooms.delete(id.toUpperCase());
}

export function tryJoinRoom(id: string, token: string, name: string) {
  const room = getOnlineRoom(id);
  if (!room) return { ok: false as const, error: 'missing' };
  return joinRoom(room, token, name);
}