<script lang="ts">
  import { onMount } from "svelte";

  import intro from "$lib/markdown/intro.md";
  import family from "$lib/markdown/family.md";

  const commands = [
    {
      text: "whoami",
      ouputComponent: intro,
    },
    {
      text: "cat family.png",
      ouputComponent: family,
    },
  ];

  let useAnimation = $state(false);
  let completedCommandCount = $state(commands.length);

  let commandIndex = $state(commands.length);
  let currentCommandIndex = $state(0);
  let currentCommand = $derived(commands[commandIndex]);

  onMount(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return;
    }

    let typingInterval: ReturnType<typeof setInterval>;
    let commandDelay: ReturnType<typeof setTimeout>;

    useAnimation = true;
    completedCommandCount = 0;
    commandIndex = 0;
    currentCommandIndex = 0;

    const intervalHandler = () => {
      if (currentCommand && currentCommandIndex < currentCommand.text.length) {
        currentCommandIndex++;
      } else if (currentCommand) {
        clearInterval(typingInterval);
        commandDelay = setTimeout(() => {
          completedCommandCount++;
          currentCommandIndex = 0;
          commandIndex++;
          if (currentCommand) {
            typingInterval = setInterval(intervalHandler, 200);
          }
        }, 1200);
      }
    };

    typingInterval = setInterval(intervalHandler, 200);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(commandDelay);
    };
  });
</script>

<svelte:head>
  <link
    rel="preload"
    as="image"
    href="/family.webp"
    type="image/webp"
    fetchpriority="high"
  />
</svelte:head>

<section
  class="home-content"
  class:sr-only={useAnimation}
  aria-label="Introduction"
  data-testid="home-content"
>
  {#each commands as command}
    <div>
      <p class="my-0" aria-hidden="true">
        <span class="font-semibold">aj@rva $</span>
        {command.text}
      </p>
      <div class="my-16 mx-8 space-y-10">
        <command.ouputComponent />
      </div>
    </div>
  {/each}
</section>

{#if useAnimation}
  <div aria-hidden="true">
    {#each commands.slice(0, completedCommandCount) as command}
      <div>
        <p class="my-0">
          <span class="font-semibold">aj@rva $</span>
          {command.text}
        </p>
        <div class="my-16 mx-8 space-y-10">
          <command.ouputComponent />
        </div>
      </div>
    {/each}

    {#if currentCommand}
      <p class="my-0">
        <span class="font-semibold">aj@rva $</span>
        {currentCommand.text.slice(0, currentCommandIndex)}<span
          class="cursor"
          aria-hidden="true">_</span
        >
      </p>
      <div class="invisible my-16 ml-8 space-y-10">
        <currentCommand.ouputComponent />
      </div>
    {:else}
      <p class="my-0">
        <span class="font-semibold">aj@rva $</span>
        <span class="cursor" aria-hidden="true">_</span>
      </p>
    {/if}
  </div>
{/if}

<style>
  @media (prefers-reduced-motion: no-preference) {
    :global(html.js) .home-content {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  }

  .cursor {
    animation: blink 800ms steps(1, end) infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .cursor {
      animation: none;
    }
  }
</style>
