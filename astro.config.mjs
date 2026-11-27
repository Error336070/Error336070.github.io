// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/site.config.ts';

// The domain lives in two places: SITE.url in src/site.config.ts and public/CNAME.
export default defineConfig({
  site: SITE.url,
  integrations: [sitemap()],
  markdown: {
    // Code blocks carry both palettes as CSS variables; src/styles/global.css picks one per theme.
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      defaultColor: false,
    },
  },
});
