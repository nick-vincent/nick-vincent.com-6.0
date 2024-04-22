<script>
	import Image from '$lib/Image.svelte';

	export let image;

	const { title, url, thumb } = image;

	let link;
	let mouseX = 0;
	let mouseY = 0;

	$: rotateY = mouseX ? `${(mouseX / link.clientWidth) * 10}deg` : '0deg';
	$: rotateX = mouseY ? `${(mouseY / link.clientHeight) * 10}deg` : '0deg';

	function onMouseMove(e) {
		mouseX = e.offsetX - e.target.clientWidth / 2;
		mouseY = e.target.clientHeight / 2 - e.offsetY;
	}

	function onMouseLeave() {
		mouseX = 0;
		mouseY = 0;
	}
</script>

<a
	href={url}
	bind:this={link}
	on:mousemove={(e) => onMouseMove(e)}
	on:mouseleave={onMouseLeave}
	style:--mouseX={mouseX}
	style:--mouseY={mouseY}
	style:--rotateX={rotateX}
	style:--rotateY={rotateY}
>
	<span class="scale">
		<span class="rotate">
			<span class="shadow" />
			<Image alt={title} src={thumb} width="360" height="360" radius="1rem" />
			<span class="clip">
				<span class="shine" />
			</span>
		</span>
	</span>
</a>

<style>
	/* link */
	a {
		z-index: 1;
		position: relative;
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 1;
		border-radius: 1rem;
	}
	a::before {
		inset: -0.5rem;
		border-radius: 1.5rem;
	}
	a:focus {
		z-index: 2;
	}
	@media (hover: hover) {
		a:hover {
			z-index: 2;
		}
	}

	/* scale span */
	.scale {
		display: block;
		position: relative;
		border-radius: 1rem;
		transition: transform 500ms var(--ease-standard);
	}
	@media (hover: hover) {
		a:hover .scale {
			transform: scale(1.075);
		}
	}

	/* rotate span */
	.rotate {
		display: block;
		position: relative;
		border-radius: 1rem;
		transform: perspective(10em) rotateY(var(--rotateY)) rotateX(var(--rotateX));
		transition: transform 500ms var(--ease-standard);
	}
	@media (hover: hover) {
		a:hover .rotate {
			transition: transform 200ms var(--ease-standard);
		}
	}

	/* shadow span */
	.shadow {
		display: block;
		position: absolute;
		inset: 0;
		border-radius: 1rem;
		box-shadow: var(--image-shadow-hover);
		opacity: 0;
		transition: opacity 500ms var(--ease-standard);
	}
	@media (hover: hover) {
		a:hover .shadow {
			opacity: 1;
		}
	}

	/* clip span */
	.clip {
		display: block;
		position: absolute;
		inset: 0;
		clip-path: border-box;
		border-radius: 1rem;
	}

	/* shine gradient */
	.shine {
		z-index: 2;
		pointer-events: none;
		display: block;
		position: absolute;
		inset: -50%;
		opacity: 0;
		background-image: radial-gradient(circle closest-side, white, transparent);
		background-repeat: no-repeat;
		transition:
			var(--transition-theme),
			transform 250ms var(--ease-standard),
			opacity 250ms var(--ease-standard);
		transform: translateX(calc(var(--mouseX) * 1px)) translateY(calc(var(--mouseY) * -1px));
	}
	@media (hover: hover) {
		a:hover .shine {
			opacity: 0.25;
			transition:
				var(--transition-theme),
				transform 100ms var(--ease-standard),
				opacity 100ms var(--ease-standard);
		}
	}
</style>
