import type { GetPostRequest, Post } from '$lib/types';

export async function get({ params }: GetPostRequest): Promise<{ body: Post }> {
  const post = await import(`../../../lib/markdown/blog/${params.postId}.md`);
  return {
    body: {
      id: params.postId,
      metadata: post.metadata,
      content: post.default.render(),
    },
  };
}
