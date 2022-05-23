<script context="module" lang="ts">
  import type { GetPostRequest } from '$lib/types';

  export const load = async ({
    fetch,
    params,
  }: GetPostRequest & { fetch: typeof global.fetch }) => {
    const response = await fetch(`/api/post/${params.postId}`);
    const post = (await response.json()) as Post;

    return {
      props: {
        post,
      },
    };
  };
</script>

<script lang="ts">
  import type { Post } from '$lib/types';

  export let post: Post;
</script>

<h1>{post.metadata.title}</h1>
{@html post.content.html}
