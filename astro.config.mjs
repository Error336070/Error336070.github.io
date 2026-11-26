// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/site.config.ts';

// When you add a custom domain, change SITE.url in src/site.config.ts
// and add public/CNAME containing just the domain (e.g. atakemaltur.com).
export default defineConfig({
  site: SITE.url,
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed' },
  },
});
