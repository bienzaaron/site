import type { Post } from "../data";
import { Command } from "../components/Command";

export function PostPage({ post }: { post: Post }) {
  return (
    <>
      <Command>cat notes/{post.id}.md</Command>
      <article className="output document">
        <h1>{post.title}</h1>
        <p className="lede">{post.description}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </>
  );
}
