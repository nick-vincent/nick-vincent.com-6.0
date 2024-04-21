<script>
	// import Thumbnail from '$lib/gallery/Thumbnail.svelte';
	import Image from '$lib/Image.svelte';

	export let images = [];
</script>

<ul>
	{#each images as image}
		<li>
			<Image alt={image.title} src={image.thumb} width="360" height="360" radius="1rem" />

			<!-- <Thumbnail {image} /> -->
		</li>
	{/each}
</ul>

<style>
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
		gap: 1rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		margin: 0;
		width: 100%;
		height: auto;
		aspect-ratio: 1;
	}

	@media (min-width: 860px) {
		ul {
			grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
		}
	}
</style>
