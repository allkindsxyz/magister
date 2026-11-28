import { ARTIFACT_SLUGS } from './artifacts';
import { getSiteUrl } from './site';

export const SEO_LOCALES = ['en', 'ru', 'be', 'zh'] as const;
export type SeoLocale = (typeof SEO_LOCALES)[number];

export type SitemapPath = {
  /** Path after locale prefix, e.g. `/` or `/artifacts/deck`. */
  path: string;
  priority: number;
  changefreq: 'weekly' | 'monthly';
};

/** Indexable routes for deck-led SEO (excludes previews, API, legacy landing). */
export const SITEMAP_PATHS: SitemapPath[] = [
  { path: '/', priority: 1, changefreq: 'weekly' },
  { path: '/artifacts/deck', priority: 1, changefreq: 'weekly' },
  { path: '/artifacts/apparel', priority: 0.65, changefreq: 'monthly' },
  { path: '/artifacts/prints', priority: 0.65, changefreq: 'monthly' },
  { path: '/artifacts/album', priority: 0.5, changefreq: 'monthly' },
  { path: '/authors', priority: 0.55, changefreq: 'monthly' },
  { path: '/partners', priority: 0.45, changefreq: 'monthly' },
  { path: '/app', priority: 0.35, changefreq: 'monthly' },
];

function hrefLang(code: SeoLocale): string {
  return code === 'zh' ? 'zh-Hans' : code;
}

function localizedPath(lang: SeoLocale, path: string): string {
  const suffix = path === '/' ? '/' : path;
  return `/${lang}${suffix === '/' ? '/' : suffix}`;
}

function absoluteLocalized(lang: SeoLocale, path: string): string {
  return `${getSiteUrl()}${localizedPath(lang, path)}`;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function alternateLinks(path: string): string {
  return SEO_LOCALES.map((lang) => {
    const href = escapeXml(absoluteLocalized(lang, path));
    const langAttr = hrefLang(lang);
    return `<xhtml:link rel="alternate" hreflang="${langAttr}" href="${href}" />`;
  }).join('\n    ');
}

/** Deck PDP slugs kept in sync with ARTIFACT_SLUGS for sanity. */
export function assertSitemapArtifacts(): void {
  const deck = SITEMAP_PATHS.find((p) => p.path === '/artifacts/deck');
  if (!deck || !ARTIFACT_SLUGS.includes('deck')) {
    throw new Error('sitemap: deck route missing');
  }
}

export function buildSitemapXml(lastmod: string): string {
  assertSitemapArtifacts();
  const urls: string[] = [];

  for (const route of SITEMAP_PATHS) {
    for (const lang of SEO_LOCALES) {
      const loc = escapeXml(absoluteLocalized(lang, route.path));
      urls.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(2)}</priority>
    ${alternateLinks(route.path)}
  </url>`);
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;
}

export function buildRobotsTxt(): string {
  const site = getSiteUrl();
  const rules = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /new
Disallow: /en/s/
Disallow: /ru/s/
Disallow: /be/s/
Disallow: /zh/s/
Disallow: /en/old_landing/
Disallow: /ru/old_landing/
Disallow: /be/old_landing/
Disallow: /zh/old_landing/

User-agent: Yandex
Allow: /
Disallow: /api/
Disallow: /new
Disallow: /en/s/
Disallow: /ru/s/
Disallow: /be/s/
Disallow: /zh/s/
Disallow: /en/old_landing/
Disallow: /ru/old_landing/
Disallow: /be/old_landing/
Disallow: /zh/old_landing/

Sitemap: ${site}/sitemap.xml
`;
  return rules.trimEnd() + '\n';
}