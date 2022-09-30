import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	kit: {
		adapter: adapter({
			pages: 'publish',
			assets: 'publish',
			fallback: null,
			precompress: true
		})
	}
};

export default config;
