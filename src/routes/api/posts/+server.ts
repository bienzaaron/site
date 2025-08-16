import path from "node:path";
import type { GetPostsResponse, Post, PostPreview } from "$lib/types";
import { json, type RequestHandler } from "@sveltejs/kit";

// I love vite, this is so cool !?!?!?!
const posts = import.meta.glob("$lib/markdown/blog/*.md");

export const GET: RequestHandler = async () => {
  return json(
    <GetPostsResponse>await Promise.all(
      Object.entries(posts).map(async ([filePath, resolver]) => {
        const id = path.basename(filePath, path.extname(filePath));
        const post: Post = <Post>await resolver();
        return <PostPreview>{
          id,
          metadata: post.metadata,
        };
      }),
    ),
  );
};
