<script>
	import Image from '$lib/Image.svelte';
	import EmailLink from '$lib/ui/EmailLink.svelte';
	import LinkedInLink from '$lib/ui/LinkedInLink.svelte';
	import InstagramLink from '$lib/ui/InstagramLink.svelte';
	import YouTubeLink from '$lib/ui/YouTubeLink.svelte';

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
		<ul class="icons">
			<li><EmailLink url="mailto:the.nick.vincent@gmail.com" /></li>
			<li><LinkedInLink url="https://www.linkedin.com/in/nickvincent/" /></li>
			<li><InstagramLink url="https://www.instagram.com/the.nick.vincent/" /></li>
			<li><YouTubeLink url="https://www.youtube.com/@nick-vincent" /></li>
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

	ul.icons {
		display: flex;
		gap: 1rem;
		justify-content: center;
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
	}
</style>
