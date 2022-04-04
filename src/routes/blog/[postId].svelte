<script context="module">
	export const load = async ({ fetch, params }) => {
		const response = await fetch(`/api/post/${params.postId}`);
		const post = await response.json();

		return {
			props: {
				post
			}
		};
	};
</script>

<script>
	export let post;
</script>

<h1>{post.metadata.title}</h1>
{@html post.content.html}
