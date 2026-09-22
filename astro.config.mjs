import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

const DEFAULT_SITE = 'https://magister.cards';

function siteForBuild() {
  const raw = String(process.env.SITE_URL || '').trim();
  if (!raw) return DEFAULT_SITE;
  try {
    const url = new URL(raw.includes('://') ? raw : `https://${raw}`);
    if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') {
      return DEFAULT_SITE;
    }
    return url.origin;
  } catch {
    return DEFAULT_SITE;
  }
}

export default defineConfig({
  site: siteForBuild(),
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'zh'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  server: {
    port: parseInt(process.env.PORT || '4321'),
    host: true,
  },
});
