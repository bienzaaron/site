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
  content: {
    html: string;
    css: {
      code: string;
      map: never;
    };
    head: string;
  };
};

export type GetPostRequest = {
  params: {
    postId: string;
  };
};

export type SvelteStore<T> = {
  subscribe: (run: (value: T) => unknown, invalidate?: unknown) => unknown;
};
