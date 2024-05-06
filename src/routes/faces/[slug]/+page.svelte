<script>
	import Lightbox from '$lib/gallery/Lightbox.svelte';

	export let data;

	const { image, prevImage, nextImage } = data;
	const { title, caption } = image;
</script>

<svelte:head>
	<title>Nick Vincent → Faces → {title}</title>
	<meta name="description" content={caption} />
</svelte:head>

<Lightbox {image} {prevImage} {nextImage} dir="faces" />
