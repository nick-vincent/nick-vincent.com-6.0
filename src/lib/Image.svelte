<script>
	export let src;
	export let alt;
	export let width;
	export let height;
	export let radius = '1.5rem';
</script>

<div class="wrapper" style={`--border-radius: ${radius}`}>
	<img {alt} {src} {width} {height} loading="lazy" />
</div>

<style>
	.wrapper {
		border-radius: var(--border-radius);
		overflow: hidden;
		background-color: var(--color-image-background);
		box-shadow: var(--image-shadow);
		background-image: linear-gradient(to bottom, var(--dark-color-line), var(--light-color-line));
	}

	img {
		display: block;
		width: 100%;
		height: auto;
		margin: 0;
	}
</style>
