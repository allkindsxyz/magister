import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  site: (process.env.SITE_URL || 'https://magister.cards').replace(/\/$/, ''),
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  server: {
    port: parseInt(process.env.PORT || '4321'),
    host: true,
  },
});
