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
      map: never,
    },
    head: string;
  }
};
