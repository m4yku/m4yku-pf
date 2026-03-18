import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
    paths: {
      // ⚠️ PALITAN ITO: Ilagay ang pangalan ng repository mo sa GitHub
      // Halimbawa, kung ang repo mo ay "m4yku-pf", ilagay ang '/m4yku-pf'
      base: process.env.NODE_ENV === 'production' ? '/m4yku-pf' : '',
    }
  }
};

export default config;