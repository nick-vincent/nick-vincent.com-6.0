<script>
	import Image from '$lib/Image.svelte';
	import photo from '$lib/images/contact.jpg?format=webp&w=1200';
</script>

<svelte:head>
	<title>Nick Vincent → Contact</title>
	<meta name="description" content="Connect or get in touch." />
</svelte:head>

<h1 class="visually-hidden">Contact</h1>
<div class="grid">
	<div class="image">
		<Image alt="Phone booth relic." src={photo} width="3024" height="3024" />
	</div>
	<div class="text">
		<p>Connect or get in touch.</p>
		<ul>
			<li><a href="mailto:the.nick.vincent@gmail.com" target="_blank">Email</a></li>
			<li><a href="https://www.linkedin.com/in/nickvincent/" target="_blank">LinkedIn</a></li>
			<li><a href="https://www.instagram.com/the.nick.vincent/" target="_blank">Instagram</a></li>
			<li><a href="https://www.youtube.com/@nick-vincent" target="_blank">YouTube</a></li>
		</ul>
	</div>
</div>

<style>
	.image {
		margin-bottom: 1rem;
	}

	p {
		margin: 0 !important;
		padding: 0;
		display: inline;
	}

	@media (min-width: 860px) {
		.grid {
			display: flex;
			gap: 2rem;
			text-align: left;
		}
		.image {
			max-width: calc(50% - 1rem);
		}
		.text {
			padding-top: 1.5rem;
		}
		p {
			display: block;
		}
	}
</style>
