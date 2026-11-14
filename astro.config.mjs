// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

const SITE_URL = 'https://cleanmailapp.com';
const BLOG_CONTENT_DIRECTORY = './src/content/blog';
const FRONTMATTER_DATE_PATTERN = /^(updated|date):\s*"?(\d{4}-\d{2}-\d{2})"?\s*$/gm;
const FRONTMATTER_DRAFT_PATTERN = /^draft:\s*true\s*$/m;

// ponytail: lastmod only where we know the real date (each post's own frontmatter), never a build-time stamp on every URL.
function readPostLastModified() {
  const lastModifiedByUrl = new Map();
  for (const fileName of readdirSync(BLOG_CONTENT_DIRECTORY).filter((name) => name.endsWith('.md'))) {
    const source = readFileSync(`${BLOG_CONTENT_DIRECTORY}/${fileName}`, 'utf8');
    if (FRONTMATTER_DRAFT_PATTERN.test(source)) continue;
    const dates = [...source.matchAll(FRONTMATTER_DATE_PATTERN)].map((match) => match[2]).sort();
    if (dates.length === 0) continue;
    lastModifiedByUrl.set(`${SITE_URL}/blog/${fileName.replace(/\.md$/, '')}`, dates[dates.length - 1]);
  }
  const newestPostDate = [...lastModifiedByUrl.values()].sort().at(-1);
  if (newestPostDate) lastModifiedByUrl.set(`${SITE_URL}/blog`, newestPostDate);
  return lastModifiedByUrl;
}

const postLastModifiedByUrl = readPostLastModified();

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  integrations: [sitemap({ filter: (page) => !/\/(coming-soon|checkout-success|checkout-cancel|portal-return|r|get|terms\/\d{4}-\d{2}-\d{2}(-early)?)$/.test(page),
    serialize(item) {
      const lastModified = postLastModifiedByUrl.get(item.url.replace(/\/$/, ''));
      return lastModified ? { ...item, lastmod: lastModified } : item;
    } })],
});
