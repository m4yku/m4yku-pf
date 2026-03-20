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
			// IMPORTANT: Replace 'm4yku-pf' with your actual GitHub repository name
			// Example: If your repo is github.com/m4yku/portfolio, use '/portfolio'
			// If using username.github.io repo, use '' (empty string)
			base: process.env.NODE_ENV === 'production' ? '/m4yku-pf' : ''
		}
	}
};

export default config;