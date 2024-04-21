<script>
	import photo from '$lib/images/contact.jpg?format=webp&w=1200';
</script>

<svelte:head>
	<title>Nick Vincent → Contact</title>
	<meta name="description" content="Connect or get in touch." />
</svelte:head>

<div class="wrapper">
	<img alt="Phone booth relic." src={photo} width="3024" height="3779" />
	<h1>Contact</h1>
	<p>Connect or get in touch.</p>
	<ul>
		<li><a href="mailto:the.nick.vincent@gmail.com" target="_blank">Email</a></li>
		<li><a href="https://www.linkedin.com/in/nickvincent/" target="_blank">LinkedIn</a></li>
		<li><a href="https://www.instagram.com/the.nick.vincent/" target="_blank">Instagram</a></li>
		<li><a href="https://www.youtube.com/@nick-vincent" target="_blank">YouTube</a></li>
	</ul>
</div>

<style>
	.wrapper {
		margin: auto;
		width: 100%;
	}

	img {
		margin: 0 0 0.5rem 0;
	}
</style>
