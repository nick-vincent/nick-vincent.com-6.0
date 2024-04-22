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
		z-index: 0;
		position: relative;
		border-radius: var(--border-radius);
		overflow: hidden;
		background-color: var(--color-image-background);
		box-shadow: var(--image-shadow);
		/* background-image: linear-gradient(to bottom, var(--dark-color-line), var(--light-color-line)); */
	}

	/* .wrapper::before {
		position: absolute;
		z-index: 1;
		content: '';
		border-radius: var(--border-radius);
		inset: 0;
		background-image: linear-gradient(
			to right,
			transparent 0,
			var(--color-line) 100dvw,
			var(--color-line) 200dvw,
			transparent 300dvw
		);
		background-size: 300dvw 100%;
		background-repeat: no-repeat;
		animation-name: image-loading;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	} */

	/* .wrapper::after {
		position: absolute;
		z-index: 3;
		content: '';
		border-radius: var(--border-radius);
		inset: 0;
		background-image: linear-gradient(to bottom, white, black);
		background-clip: padding-box;
		border: solid 0.2rem transparent;
	} */

	img {
		z-index: 2;
		position: relative;
		display: block;
		width: 100%;
		height: auto;
		margin: 0;
	}

	/* @keyframes image-loading {
		0% {
			background-position: -300dvw 0;
		}
		100% {
			background-position: 300dvw 0;
		}
	} */
</style>
