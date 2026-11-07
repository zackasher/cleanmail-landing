// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cleanmailapp.com',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  integrations: [sitemap({ filter: (page) => !/\/(coming-soon|checkout-success|checkout-cancel|portal-return|r|get|terms\/\d{4}-\d{2}-\d{2})$/.test(page) })],
});
