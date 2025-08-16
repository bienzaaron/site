import { render } from "svelte/server";
import type { GetPostRequest, Post } from "$lib/types";
import { json, type RequestHandler } from "@sveltejs/kit";
import type { SvelteComponent } from "svelte";

export const GET: RequestHandler<GetPostRequest["params"]> = async ({
  params,
}) => {
  const post: SvelteComponent<Record<string, never>> = await import(
    `../../../../lib/markdown/blog/${params.postId}.md`
  );
  return json(<Post>{
    id: params.postId,
    metadata: post.metadata,
    content: render(post.default),
  });
};
