<script>
	import Grid from '$lib/gallery/Grid.svelte';

	export let data;
	const images = data.images;
</script>

<svelte:head>
	<title>Nick Vincent → Photos</title>
	<meta name="description" content="Photography from around the world." />
</svelte:head>

<div class="intro">
	<h1>Photos</h1>
	<p>Photography from around the world.</p>
</div>

<Grid {images} />
