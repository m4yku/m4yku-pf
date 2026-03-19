import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html'
    }),
    appDir: 'app', // <-- THIS IS THE MAGIC FIX! Removes the underscore.
    paths: {
      base: process.argv.includes('dev') ? '' : '/m4yku-pf',
    },
    alias: {
      $lib: 'src/lib'
    }
  }
};

export default config;