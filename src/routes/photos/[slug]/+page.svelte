<script>
	import Lightbox from '$lib/gallery/Lightbox.svelte';

	export let data;

	const { image, prevImage, nextImage, title, caption } = data;
</script>

<svelte:head>
	<title>Nick Vincent → Photos → {title}</title>
	<meta name="description" content={caption} />
</svelte:head>

<Lightbox {image} {prevImage} {nextImage} dir="photos" />
