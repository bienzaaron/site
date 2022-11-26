import type { PostPreview } from '$lib/types';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad<{ posts: PostPreview[] }> = async ({ fetch }) => {
  const response = await fetch('/api/posts');
  const posts = <PostPreview[]>await response.json();

  return {
    posts,
  };
};
