<script>
	import photo from '$lib/images/home.jpg?format=webp&w=1200';
</script>

<svelte:head>
	<title>Nick Vincent</title>
	<meta
		name="description"
		content="Known to push pixels, strum tunes, make faces, snap photos, & reply promptly."
	/>
</svelte:head>

<div class="wrapper">
	<div class="image-wrapper">
		<img alt="Nick recording guitar tracks." src={photo} width="3024" height="3780" />
	</div>
	<h1>Nick Vincent</h1>
	<p>
		Known to <a href="/work/">push pixels</a>, <a href="/tunes/">strum tunes</a>,
		<a href="/faces/">make faces</a>, &
		<a href="/photos/">snap photos</a>.
	</p>
</div>

<style>
	.wrapper {
		margin: auto;
		width: 100%;
	}

	.image-wrapper {
		margin: 0 0 0.5rem 0;
	}
</style>
