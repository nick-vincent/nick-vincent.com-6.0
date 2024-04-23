<script>
	import { goto } from '$app/navigation';

	import Image from '$lib/Image.svelte';
	import Details from '$lib/gallery/Details.svelte';

	export let dir;
	export let image;
	export let prevImage;
	export let nextImage;

	const backUrl = `/${dir}/`;

	const { src, title, width, height } = image;

	$: aspect = width / height;

	function onKeyUp(e) {
		switch (e.key) {
			case 'Escape':
				if (backUrl) goto(backUrl, { noScroll: true });
				break;
			case 'ArrowLeft':
				if (prevImage) goto(prevImage.url, { noScroll: true });
				break;
			case 'ArrowRight':
				if (nextImage) goto(nextImage.url, { noScroll: true });
				break;
		}
	}
</script>

<svelte:window on:keyup={(e) => onKeyUp(e)} />

<div class="lightbox {aspect < 16 / 9 ? 'portrait' : 'landscape'}">
	<div class="details">
		<Details {dir} {image} {prevImage} {nextImage} />
	</div>
	<div class="image">
		<Image {src} alt={title} {width} {height} />
	</div>
</div>

<style>
	.lightbox {
		position: relative;
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
	}

	.image {
		order: 1;
		width: 100%;
		border-radius: 1.5rem;
		box-shadow: var(--image-shadow);
	}

	.details {
		order: 2;
		max-width: 18rem;
		text-align: left;
	}

	@media (min-width: 860px) {
		.lightbox:not(.landscape) {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
