<script>
	import Header from './Header.svelte';
	import PageTransition from '$lib/PageTransition.svelte';
	import './styles.css';

	export let data;
	$: pathParts = data.pathname.split('/');
	$: dir = `/${pathParts[1]}`;
</script>

<Header />

<main>
	<PageTransition key={dir}>
		<slot />
	</PageTransition>
</main>
