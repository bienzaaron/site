<script lang="ts">
  import { setContext } from 'svelte';
  import { readable, type Subscriber } from 'svelte/store';
  import { page } from '$app/stores';

  import type { TagMetadata } from '$lib/types';
  import type { LayoutData } from './$types';

  export let data: LayoutData;

  const { posts } = data;

  const tags: { [tagName: string]: TagMetadata } = {};
  posts.forEach((p) => {
    p.metadata.tags.forEach((tag) => {
      if (tags[tag]) {
        tags[tag].count++;
      } else {
        tags[tag] = {
          selected: false,
          count: 1,
        };
      }
    });
  });
  const sortedTags = Object.keys(tags).sort();

  let setTags: Subscriber<{ [tagName: string]: TagMetadata }>;
  const tagsStore = readable(tags, function start(set) {
    setTags = set;
    return function stop() {
      setTags = undefined;
    };
  });
  setContext('tags', tagsStore);
  setContext('posts', posts);

  function toggleFilter(tag: string) {
    tags[tag].selected = !tags[tag].selected;
    if (setTags) {
      setTags(tags);
    }
  }

  $: isRoot = $page.url.pathname === '/blog';
</script>

<div class="flex flex-row divide-x divide-slate-500">
  {#if isRoot}
    <div class="pr-4 flex flex-col">
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
    </div>
  {/if}
  <div class="w-full pb-8" class:pl-16={isRoot}>
    <slot />
  </div>
</div>
