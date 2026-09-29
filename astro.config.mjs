import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://iajaykumar.live',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
