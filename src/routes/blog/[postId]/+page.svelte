<script lang="ts">
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  const { post } = data;
</script>

<h1>{post.metadata.title}</h1>
{@html post.content.html}
