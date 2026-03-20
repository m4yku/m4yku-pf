import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
    appDir: 'app', // <--- ITO YUNG NAGBABALIK NA MAGIC FIX!
    paths: {
      // FORCE base path - walang condition!
      base: '/m4yku-pf'
    }
  }
};

export default config;