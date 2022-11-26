<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  const { post } = data;
</script>

<h1>{post.metadata.title}</h1>
{@html post.content.html}
