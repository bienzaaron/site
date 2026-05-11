import { Link } from "@tanstack/react-router";

import { posts } from "../data";

export function PostList() {
  return (
    <ul className="notes">
      {posts.map((post) => (
        <li key={post.id}>
          <div className="note-head">
            <Link to="/blog/$postId" params={{ postId: post.id }}>
              {post.title}
            </Link>
            <span className="tag">{post.tags.join(" / ")}</span>
          </div>
          <div className="note-desc">{post.description}</div>
        </li>
      ))}
    </ul>
  );
}
