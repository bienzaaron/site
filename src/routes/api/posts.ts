import path from 'node:path';
import type { Post, PostPreview } from '$lib/types';

// I love vite, this is so cool !?!?!?!
const posts = import.meta.glob('../../lib/markdown/blog/*.md');

export async function get(): Promise<{ body: PostPreview[] }> {
  return {
    body: await Promise.all(
      Object.entries(posts).map(async ([filePath, resolver]) => {
        const id = path.basename(filePath, path.extname(filePath));
        const post: Post = (await resolver()) as Post;
        return {
          id,
          metadata: post.metadata,
        };
      }),
    ),
  };
}
