import type { render } from "svelte/server";

export type TagMetadata = { count: number; selected: boolean };

export type PostMetadata = {
  tags: string[];
  title: string;
  description: string;
};

export type PostPreview = {
  id: string;
  metadata: PostMetadata;
};

export type Post = PostPreview & {
  content: ReturnType<typeof render>
};

export type GetPostRequest = {
  params: {
    postId: string;
  };
};

export type GetPostsResponse = PostPreview[];

export type SvelteStore<T> = {
  subscribe: (run: (value: T) => unknown, invalidate?: unknown) => unknown;
};
