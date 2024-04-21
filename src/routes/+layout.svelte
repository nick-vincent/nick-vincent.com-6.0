<script>
	import Header from './Header.svelte';
	import '../styles/index.css';

	let navOpen = false;
</script>

<Header bind:navOpen />

<main class:navOpen>
	<div class="content">
		<slot />
	</div>
</main>

<style>
	main {
		inset: 0;
		overflow: auto;
		position: fixed;
		transition-property: opacity, transform;
		transition-duration: var(--duration-nav);
		transition-delay: var(--duration-nav);
		transition-timing-function: var(--ease-accelerate);
	}

	main.navOpen {
		pointer-events: none;
		opacity: 0;
		transform: scale(0.95);
		transition-delay: 0ms;
		transition-timing-function: var(--ease-decelerate);
	}

	.content {
		max-width: 54rem;
		margin: 2rem;
	}
</style>
