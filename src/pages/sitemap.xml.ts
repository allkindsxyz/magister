import type { APIRoute } from 'astro';
import { buildSitemapXml } from '../lib/seoSitemap';

export const prerender = false;

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const body = buildSitemapXml(lastmod);
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};