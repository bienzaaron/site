import type { Post } from '../types';

export async function get({ params }): Promise<{ body: Post }> {
	const post = await import(`../../../lib/markdown/blog/${params.postId}.md`);
	return {
		body: {
			id: params.postId,
			metadata: post.metadata,
			content: post.default.render()
		}
	};
}
