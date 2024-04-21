<script>
	import { page } from '$app/stores';

	export let navOpen = false;

	const navItems = [
		{ text: 'Home', href: '/' },
		{ text: 'Work', href: '/work/' },
		{ text: 'Tunes', href: '/tunes/' },
		{ text: 'Faces', href: '/faces/' },
		{ text: 'Photos', href: '/photos/' },
		{ text: 'Contact', href: '/contact/' }
	];
</script>

<header>
	<button on:click={() => (navOpen = !navOpen)}>Menu</button>
	<nav class:navOpen>
		<ul>
			{#each navItems as { href, text }}
				<li>
					<a
						{href}
						tabindex={navOpen ? null : '-1'}
						on:click={() => (navOpen = false)}
						aria-current={$page.url.pathname === href ? 'page' : null}>{text}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	button {
		z-index: 2;
		cursor: pointer;
		position: fixed;
		top: 0;
		left: 0;
	}

	nav {
		z-index: 1;
		text-align: center;
		pointer-events: none;
		position: fixed;
		display: flex;
		inset: 0;
		opacity: 0;
		transform: scale(0.95);
		transition-property: opacity, transform;
		transition-duration: var(--duration-nav);
		transition-timing-function: var(--ease-accelerate);
	}

	nav.navOpen {
		pointer-events: auto;
		opacity: 1;
		transform: scale(1);
		transition-delay: var(--duration-nav);
		transition-timing-function: var(--ease-decelerate);
	}

	ul {
		padding: 0;
		margin: auto;
		display: block;
	}

	li {
		padding: 0;
		margin: 0;
		display: block;
	}

	a {
		display: block;
		font-weight: 500;
		font-size: 1.5em;
		line-height: 1;
		text-decoration: none;
		padding: 0.5em 1em;
		color: black;
	}
</style>
