<script context="module">
	export const load = async ({ fetch }) => {
		const response = await fetch('/api/posts');
		const posts = await response.json();

		return {
			props: {
				posts
			}
		};
	};
</script>

<script>
	import { setContext } from 'svelte';
	import { readable } from 'svelte/store';
	import { page } from '$app/stores';

	export let posts;

	const tags = {};
	// @ts-expect-error todo
	posts.forEach((p) => {
		p.metadata.tags.forEach((tag) => {
			if (tags[tag]) {
				tags[tag].count++;
			} else {
				tags[tag] = {
					selected: false,
					count: 1
				};
			}
		});
	});
	const sortedTags = Object.keys(tags).sort();

	let setTags;
	const tagsStore = readable(tags, function start(set) {
		setTags = set;
		return function stop() {
			setTags = undefined;
		};
	});
	setContext('tags', tagsStore);
	setContext('posts', posts);

	function toggleFilter(tag) {
		tags[tag].selected = !tags[tag].selected;
		if (setTags) {
			setTags(tags);
		}
	}
</script>

<div class="flex flex-row">
	<div class="pr-4 border-r border-slate-500 flex flex-col">
		{#if $page.url.pathname === '/blog'}
			<h4>Tags</h4>
			{#each sortedTags as tag}
				<button
					on:click={toggleFilter.bind(null, tag)}
					class:font-semibold={tags[tag].selected}
					class="text-left w-min sm:w-max"
				>
					{tag} ({tags[tag].count})
				</button>
			{/each}
		{/if}
	</div>
	<div class="w-full px-16 pb-8">
		<slot />
	</div>
</div>
