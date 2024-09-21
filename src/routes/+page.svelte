<script>
	import Image from '$lib/Image.svelte';
	import photo from '$lib/images/home.png?format=webp&w=1200';
</script>

<svelte:head>
	<title>Nick Vincent</title>
	<meta
		name="description"
		content="Known to push pixels, strum tunes, make faces, snap photos, & reply promptly."
	/>
</svelte:head>

<h1 class="visually-hidden">Nick Vincent</h1>
<div class="grid">
	<div class="image">
		<Image alt="Recording guitar tracks." src={photo} width="2251" height="2251" />
	</div>
	<div class="text">
		<p>Known to</p>
		<ul>
			<li><a href="/work/">push pixels</a></li>
			<li><a href="/tunes/">strum tunes</a></li>
			<li><a href="/faces/">make faces</a></li>
			<li><a href="/photos/">snap photos</a></li>
			<li><a href="/contact/">reply promptly</a></li>
		</ul>
	</div>
</div>

<style>
	.image {
		margin-bottom: 1rem;
	}

	p {
		margin: 0;
		padding: 0;
		display: inline;
	}

	ul {
		display: inline;
		margin: 0;
		padding: 0;
	}
	ul li {
		display: inline;
		margin: 0;
		padding: 0;
		white-space: nowrap;
	}
	ul li:not(:last-child)::after {
		content: ', ';
	}
	ul li:last-child::before {
		color: var(--color-text);
		content: '& ';
	}
	ul li:last-child::after {
		content: '.';
	}

	@media (min-width: 860px) {
		.grid {
			display: flex;
			gap: 2rem;
			text-align: left;
		}
		.image {
			width: calc(50% - 1rem);
		}
		.text {
			padding-top: 1.5rem;
		}

		p {
			display: block;
		}
		ul {
			display: block;
		}
		ul li {
			display: block;
		}
	}
</style>
