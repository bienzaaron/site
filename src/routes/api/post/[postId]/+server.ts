import type { GetPostRequest, Post } from '$lib/types';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler<GetPostRequest['params']> = async ({ params }) => {
  const post = await import(`../../../../lib/markdown/blog/${params.postId}.md`);
  return json(<Post>{
    id: params.postId,
    metadata: post.metadata,
    content: post.default.render(),
  });
};
