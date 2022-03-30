import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [preprocess(), mdsvex({
		extensions: ['.md'],
		highlight: {
			alias: { yavascript: "javascript" }
		}
	})],
	kit: {
		adapter: adapter()
	}
};

export default config;
