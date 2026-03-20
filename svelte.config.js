import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true
    }),
    paths: {
      // FORCE the base path - no condition!
      base: '/m4yku-pf'
    }
  }
};

export default config;