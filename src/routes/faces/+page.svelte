<script>
	import Grid from '$lib/gallery/Grid.svelte';

	export let data;
	const images = data.images;
</script>

<svelte:head>
	<title>Nick Vincent → Faces</title>
	<meta name="description" content="Portraits of various famous folks." />
</svelte:head>

<div class="intro">
	<h1>Faces</h1>
	<p>Portraits of various famous folks.</p>
</div>

<Grid {images} />
