<script>
	import { goto } from '$app/navigation';

	import Image from '$lib/Image.svelte';
	import Details from '$lib/gallery/Details.svelte';

	export let dir;
	export let image;
	export let prevImage;
	export let nextImage;

	const backUrl = `/${dir}/`;

	$: src = image.src;
	$: title = image.title;
	$: width = image.width;
	$: height = image.height;
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
		/* border-top: 2px solid var(--color-line);
		padding-top: 2rem; */
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

	@media (min-width: 1100px) {
		.lightbox:not(.landscape) {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
