<script>
	import '../app.css';
	import 'remixicon/fonts/remixicon.css';
</script>

<div class="page px-16 lg:px-32 py-2 flex flex-col font-mono">
	<div class="header pt-10 pb-16 flex flex-row space-x-20">
		<a class="no-underline" href="/">Hi <span class="font-serif">👋</span></a>
		<a class="no-underline" href="/about">About <span class="font-serif">📕</span></a>
		<a class="no-underline" href="/blog">Blog <span class="font-serif">✍️</span></a>
		<a class="no-underline" href="/resume.txt">Hire Me <span class="font-serif">💲</span></a>
	</div>
	<div class="page-content max-w-4xl mb-16">
		<slot />
	</div>

	<div class="footer flex flex-row justify-center space-x-4">
		<p class="my-0">AJ Bienz ©</p>
		<div class="w-px bg-slate-500" />
		<div>
			<a class="no-underline" href="https://github.com/bienzaaron"><i class="ri-github-line" /></a>
			<a class="no-underline" href="https://www.npmjs.com/~ajbienz"><i class="ri-npmjs-line" /></a>
			<a class="no-underline" href="https://www.linkedin.com/in/abienz"><i class="ri-linkedin-line" /></a>
		</div>
	</div>
</div>

<style>
	/* todo: tailwind-ify these */
	.page {
		min-height: 100vh;
		background-color: #c0cfb4;
	}

	.page-content {
		flex: 1 0 auto;
	}
	.footer {
		flex-shrink: 0;
	}
</style>
