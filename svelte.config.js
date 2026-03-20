import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
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
      // IMPORTANT: Replace 'your-repo-name' with your actual GitHub repository name
      // Example: If your repo is github.com/m4yku/portfolio, use '/portfolio'
      base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : ''
    }
  }
};

export default config;