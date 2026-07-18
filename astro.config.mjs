// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cleanmailapp.com',
  trailingSlash: 'never',
  integrations: [sitemap()],
});
