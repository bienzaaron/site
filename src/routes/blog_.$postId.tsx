import { createFileRoute } from "@tanstack/react-router";

import { posts } from "../data";
import { NotFound } from "../pages/NotFound";
import { PostPage } from "../pages/PostPage";

export const Route = createFileRoute("/blog_/$postId")({
  loader: ({ params: { postId } }) => {
    const post = posts.find((entry) => entry.id === postId);

    return {
      post,
      title: post?.title.toLowerCase() ?? "not-found",
    };
  },
  component: PostComponent,
});

function PostComponent() {
  const { post } = Route.useLoaderData();

  if (!post) {
    return <NotFound />;
  }

  return <PostPage post={post} />;
}
