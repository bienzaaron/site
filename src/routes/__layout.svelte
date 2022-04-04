<script>
	import '../app.css';
	import 'remixicon/fonts/remixicon.css';
	import ClickOutside from 'svelte-click-outside';

	let showMenu = false;
</script>

<svelte:head>
	<title>AJ Bienz</title>
</svelte:head>

<div class="page px-4 lg:px-32 py-2 flex flex-col font-mono">
	<div class="hidden sm:flex header pt-10 pb-16 flex flex-row">
		<div class="space-x-16">
			<a class="no-underline" href="/">Hi <span class="font-serif">👋</span></a>
			<a class="no-underline" href="/about">About <span class="font-serif">📕</span></a>
			<a class="no-underline" href="/blog">Blog <span class="font-serif">✍️</span></a>
			<a class="no-underline" href="/resume.txt">Hire Me <span class="font-serif">💲</span></a>
		</div>
	</div>
	<div class="sm:hidden py-4 flex flex-row justify-end">
		<div class="flex flex-col items-end">
			<ClickOutside
				on:clickoutside={() => {
					showMenu = false;
				}}
			>
				<button
					on:click={() => {
						showMenu = !showMenu;
					}}
					class="rounded-sm shadow-sm py-2 px-2 h-min focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
				>
					<i class="ri-menu-fill" />
				</button>
			</ClickOutside>
			<div>
				{#if showMenu}
					<div
						class="absolute mt-1 right-4 px-2 w-max z-10 menu rounded-sm ring-1 ring-black ring-opacity-5 divide-y divide-slate-500 flex flex-col"
						role="menu"
						aria-orientation="vertical"
					>
						<a class="no-underline py-2" href="/">Hi <span class="font-serif">👋</span></a>
						<a class="no-underline py-2" href="/about">About <span class="font-serif">📕</span></a>
						<a class="no-underline py-2" href="/blog">Blog <span class="font-serif">✍️</span></a>
						<a class="no-underline py-2" href="/resume.txt"
							>Hire Me <span class="font-serif">💲</span></a
						>
					</div>
				{/if}
			</div>
		</div>
	</div>
	<div class="page-content max-w-4xl mx-auto mb-16">
		<slot />
	</div>

	<div class="footer flex flex-row justify-center space-x-4">
		<p class="my-0">AJ Bienz ©</p>
		<div class="w-px bg-slate-500" />
		<div>
			<a class="no-underline" href="https://github.com/bienzaaron"><i class="ri-github-line" /></a>
			<a class="no-underline" href="https://www.npmjs.com/~ajbienz"><i class="ri-npmjs-line" /></a>
			<a class="no-underline" href="https://www.linkedin.com/in/abienz"
				><i class="ri-linkedin-line" /></a
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
