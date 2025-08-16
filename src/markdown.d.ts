declare module "blog/*.md" {
  import { SvelteComponent } from "svelte";
  import type { PostMetadata } from "$lib/types";
  export default class MarkdownComponent extends SvelteComponent<
    Record<string, never>
  > {}
  export type metadata = PostMetadata;
}

declare module "*.md" {
  import { SvelteComponent } from "svelte";
  export default class MarkdownComponent extends SvelteComponent<
    Record<string, never>
  > {}
  export type metadata = Record<string, never>;
}
