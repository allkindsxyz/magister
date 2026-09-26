import type { APIRoute } from 'astro';
import {
  claimRun,
  completeRun,
  listBoard,
  startRun,
} from '../../lib/leaderboardStore';

export const prerender = false;

const hits = new Map<string, number[]>();

function tooMany(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((at) => now - at < 10 * 60 * 1000);
  if (recent.length >= 30) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

export const GET: APIRoute = async () => {
  const entries = await listBoard();
  return json({ entries });
};

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const raw = await request.text();
  if (raw.length > 2000) return json({ ok: false, error: 'bad_json' }, 400);

  let body: { action?: unknown; id?: unknown; name?: unknown; errors?: unknown };
  try {
    body = JSON.parse(raw) as { action?: unknown; id?: unknown; name?: unknown; errors?: unknown };
  } catch {
    return json({ ok: false, error: 'bad_json' }, 400);
  }

  if (body.action === 'start') {
    if (tooMany(clientAddress || 'unknown')) return json({ ok: false, error: 'rate' }, 429);
    const session = await startRun();
    return json({ ok: true, id: session.id });
  }

  if (body.action === 'complete') {
    const result = await completeRun(body.id, body.errors);
    return json(result, result.ok ? 200 : 400);
  }

  if (body.action === 'claim') {
    const result = await claimRun(body.id, body.name);
    return json(result, result.ok ? 200 : 400);
  }

  return json({ ok: false, error: 'bad_action' }, 400);
};
