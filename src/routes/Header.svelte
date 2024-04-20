<script>
	import { page } from '$app/stores';

	const navItems = [
		{ text: 'Work', href: '/work/' },
		{ text: 'Tunes', href: '/tunes/' },
		{ text: 'Faces', href: '/faces/' },
		{ text: 'Photos', href: '/photos/' },
		{ text: 'Contact', href: '/contact/' }
	];
</script>

<header>
	<nav>
		<a aria-current={$page.url.pathname === '/' ? 'page' : null} href="/">Nick Vincent</a>
		<ul>
			{#each navItems as { href, text }, i}
				<li>
					<a aria-current={$page.url.pathname === href ? 'page' : null} {href}>{text}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
