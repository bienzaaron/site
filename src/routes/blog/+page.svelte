<script lang="ts">
  import type { Post, TagMetadata, SvelteStore } from '$lib/types';

  import { getContext } from 'svelte';

  let tags: SvelteStore<{ [tagName: string]: TagMetadata }> = getContext('tags');
  const posts: Post[] = getContext('posts');

  $: selectedTags = Object.entries($tags)
    .filter(([, { selected }]) => selected)
    .map(([key]) => key);
  $: filterTags = selectedTags.length > 0 ? selectedTags : Object.keys($tags).sort();
  $: filteredPosts = posts.filter((post) =>
    post.metadata.tags.some((tag) => filterTags.includes(tag)),
  );
</script>

<div>
  <h1 class="mb-16">Posts</h1>
  <!-- TODO: pagination when there's actually some articles here -->
  {#each filteredPosts as post}
    <a class="no-underline" href="/blog/{post.id}">
      <h2>{post.metadata.title}</h2>
      <p class="my-0">{post.metadata.description}</p>
    </a>
  {/each}
</div>
