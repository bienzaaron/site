import { Command } from "../components/Command";
import { PostList } from "../components/PostList";

export function Blog() {
  return (
    <>
      <Command>ls notes</Command>
      <PostList />
    </>
  );
}
