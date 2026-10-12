// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://thallium.tarxz.zip',
  trailingSlash: 'ignore',
  build: {
    // Inline small assets to cut request count on the landing page.
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      // Everything here is tiny; fail loudly if that ever stops being true.
      assetsInlineLimit: 4096,
    },
  },
});
