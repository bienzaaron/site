import type { Post } from "$lib/types";

import type { PageLoad } from "./$types";

export const load: PageLoad<{ post: Post }> = async ({ fetch, params }) => {
  const response = await fetch(`/api/post/${params.postId}`);
  const post = <Post>await response.json();

  return {
    post,
  };
};
