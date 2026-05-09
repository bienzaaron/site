<script lang="ts">
  import type { Component } from "svelte";
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  const postComponents = import.meta.glob<{
    default: Component;
  }>("/src/lib/markdown/blog/*.md", { eager: true });

  let { data }: Props = $props();
  let post = $derived(data.post);
  let PostContent = $derived(
    postComponents[`/src/lib/markdown/blog/${post.id}.md`]?.default,
  );
</script>

<h1>{post.metadata.title}</h1>
{#if PostContent}
  <PostContent />
{/if}
