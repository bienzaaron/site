declare module "blog/*.md" {
  import { SvelteComponentTyped } from 'svelte';
  import type { PostMetadata } from './routes/api/types';

  export default class MarkdownComponent extends SvelteComponentTyped<Record<string, never>> {}

  declare const component: MarkdownComponent;
  export default component;
  export type metadata = PostMetadata
}

declare module "*.md" {
  import { SvelteComponentTyped } from 'svelte';

  export default class MarkdownComponent extends SvelteComponentTyped<Record<string, never>> {}

  declare const component: MarkdownComponent;
  export default component;
  export type metadata = Record<string, never>;
}
