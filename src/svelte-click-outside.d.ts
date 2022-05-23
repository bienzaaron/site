declare module 'svelte-click-outside' {
  import type { SvelteComponentTyped } from 'svelte';

  export default class ClickOutside extends SvelteComponentTyped<
    Record<string, never>,
    {
      clickoutside: CustomEvent<void>;
    },
    Record<string, never>
  > {}
}
