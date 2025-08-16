<script lang="ts">
  import '../app.css';
  import MenuIcon from '$lib/components/icons/menu.svelte';
  import GithubIcon from '$lib/components/icons/github.svelte';
  import LinkedInIcon from '$lib/components/icons/linkedin.svelte';
  import NpmIcon from '$lib/components/icons/npm.svelte';
  import clickOutside from '$lib/actions/click-outside';

  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
  let showMenu = $state(false);
</script>

<svelte:head>
  <title>AJ Bienz</title>
  <link rel="icon" type="image/svg" href="/favicon.png" />
</svelte:head>

<div class="page px-4 lg:px-32 py-2 flex flex-col font-mono">
  <div class="hidden sm:flex header pt-10 pb-16 flex-row">
    <div class="space-x-16">
      <a class="no-underline" href="/" aria-label="homepage"
        >Hi <span class="font-serif">👋</span></a
      >
      <a class="no-underline" href="/about" aria-label="about me page"
        >About <span class="font-serif">📕</span></a
      >
      <a class="no-underline" href="/blog" aria-label="blog entries"
        >Blog <span class="font-serif">✍️</span></a
      >
      <a
        class="no-underline"
        href="https://youtu.be/dQw4w9WgXcQ"
        aria-label="this is a rickroll disguised as a link to my resume"
        >Hire Me <span class="font-serif">💲</span></a
      >
    </div>
  </div>
  <div class="sm:hidden py-4 flex flex-row justify-end">
    <div class="flex flex-col items-end">
      <div use:clickOutside={() => (showMenu = false)}>
        <button
          data-testid="menu-button"
          onclick={() => {
            showMenu = !showMenu;
          }}
          aria-label="Show Navigation Menu"
          class="rounded-sm shadow-sm py-2 px-2 h-min focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
        >
          <MenuIcon />
        </button>
      </div>
      <div>
        {#if showMenu}
          <div
            class="absolute mt-1 right-4 px-2 w-max z-10 menu rounded-sm ring-1 ring-black ring-opacity-5 divide-y divide-slate-500 flex flex-col"
            role="menu"
            aria-orientation="vertical"
          >
            <a class="no-underline py-2" href="/" aria-label="homepage"
              >Hi <span class="font-serif">👋</span></a
            >
            <a class="no-underline py-2" href="/about" aria-label="about me page"
              >About <span class="font-serif">📕</span></a
            >
            <a class="no-underline py-2" href="/blog" aria-label="blog entries"
              >Blog <span class="font-serif">✍️</span></a
            >
            <a
              class="no-underline py-2"
              href="https://youtu.be/dQw4w9WgXcQ"
              aria-label="this is a rickroll disguised as a link to my resume"
              >Hire Me <span class="font-serif">💲</span></a
            >
          </div>
        {/if}
      </div>
    </div>
  </div>
  <div class="page-content max-w-full md:max-w-3xl lg:max-w-4xl md:w-4xl mx-auto mb-16">
    {@render children?.()}
  </div>

  <div class="footer flex flex-row justify-center space-x-4">
    <p class="my-auto">AJ Bienz ©</p>
    <div class="w-px bg-slate-500"></div>
    <div class="flex flex-row space-x-2">
      <a
        class="no-underline w-12 h-12 flex justify-center"
        data-testid="gh-link"
        href="https://github.com/bienzaaron"
        aria-label="link to my GitHub"
      >
        <div class="my-auto">
          <GithubIcon />
        </div>
      </a>
      <a
        class="no-underline w-12 h-12 flex justify-center"
        data-testid="npm-link"
        href="https://www.npmjs.com/~ajbienz"
        aria-label="link to my npm profile"><div class="my-auto"><NpmIcon /></div></a
      >
      <a
        class="no-underline w-12 h-12 flex justify-center"
        data-testid="linkedin-link"
        href="https://www.linkedin.com/in/abienz"
        aria-label="link to my LinkedIn"
      >
        <div class="my-auto">
          <LinkedInIcon />
        </div></a
      >
    </div>
  </div>
</div>

<style>
  /* todo: tailwind-ify these */
  .page {
    min-height: 100vh;
    background-color: #c0cfb4;
  }

  .menu {
    background-color: #bcc7b4;
  }

  .page-content {
    flex: 1 0 auto;
  }
  .footer {
    flex-shrink: 0;
  }
</style>
