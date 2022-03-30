<script>
	import intro from '$lib/markdown/intro.md';
	import family from '$lib/markdown/family.md';

  let cursorHidden = false;
	setInterval(() => {
		cursorHidden = !cursorHidden;
	}, 400);

	let commands = [
		{
			text: 'whoami',
			completed: false,
			ouputComponent: intro
		},
		{
			text: 'cat family.png',
			completed: false,
			ouputComponent: family
		}
	];

	let commandIndex = 0;
	let currentCommandIndex = 0;
	$: currentCommand = commands[commandIndex];

	(() => {
		let intervalHandle;
		const intervalHandler = () => {
			if (currentCommand && currentCommandIndex < currentCommand.text.length) {
				currentCommandIndex++;
			} else if (currentCommand) {
				clearInterval(intervalHandle);
				setTimeout(() => {
					currentCommand.completed = true;
					currentCommandIndex = 0;
					commandIndex++;
					commands = commands;
					if (currentCommand) {
						intervalHandle = setInterval(intervalHandler, 200);
					}
				}, 1200);
			}
		};
		intervalHandle = setInterval(intervalHandler, 200);
	})();
</script>

{#each commands as command}
	<div class:hidden={!command.completed}>
		<p class="my-0"><span class="font-semibold">aj@rva $</span> {command.text}</p>
		<div class="my-16 ml-8 space-y-10">
			<svelte:component this={command.ouputComponent} />
		</div>
	</div>
{/each}

{#if currentCommand}
	<p class="my-0">
		<span class="font-semibold">aj@rva $</span>
		{currentCommand.text.slice(0, currentCommandIndex)}<span class:hidden={cursorHidden}>_</span>
	</p>
{:else}
	<p class="my-0">
		<span class="font-semibold">aj@rva $</span> <span class:hidden={cursorHidden}>_</span>
	</p>
{/if}
