<script>
	import Image from '$lib/Image.svelte';
	import photo from '$lib/images/home.jpg?format=webp&w=1200';
</script>

<svelte:head>
	<title>Nick Vincent</title>
	<meta
		name="description"
		content="Known to push pixels, strum tunes, make faces, snap photos, & reply promptly."
	/>
</svelte:head>

<Image alt="Recording guitar tracks." src={photo} width="3024" height="3780" />
<h1 class="visually-hidden">Nick Vincent</h1>
<p>
	Known to <a href="/work/">push&nbsp;pixels</a>, <a href="/tunes/">strum&nbsp;tunes</a>,
	<a href="/faces/">make&nbsp;faces</a>,
	<a href="/photos/">snap&nbsp;photos</a>, & <a href="/contact/">reply&nbsp;promptly</a>.
</p>

<style>
	p {
		margin: 0.5rem 0 0;
		text-align: center;
	}
</style>
