import type { APIRoute } from 'astro';
import { buildRobotsTxt } from '../lib/seoSitemap';

export const prerender = false;

export const GET: APIRoute = () => {
  return new Response(buildRobotsTxt(), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};