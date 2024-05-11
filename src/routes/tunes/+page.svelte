<svelte:head>
	<title>Nick Vincent → Tunes</title>
	<meta name="description" content="Assorted musical endeavors." />
</svelte:head>

<div class="intro">
	<h1>Tunes</h1>
	<p>Assorted musical endeavors.</p>
</div>

<div class="grid">
	<div class="row">
		<div class="details">
			<h2>Currently</h2>
			<p>
				Just me & my guitar.<br />
				Lots of cover songs<br />
				and a few of my own.
			</p>
		</div>
		<div class="video">
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/videoseries?list=PLmMZSDatGk4ckjfFE82f7O-s97zjN-NL8&modestbranding=1&color=white"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			/>
		</div>
	</div>
	<div class="row">
		<div class="details">
			<h2>Previously</h2>
			<p>
				My band Annum Ford.<br />
				Filmed at Freakin’ Frog<br />
				in Las Vegas, Nevada<br />
				on December 14, 2006.
			</p>
		</div>
		<div class="video">
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/videoseries?list=PLkCSJIvjbqhu3i1saWiZRxZefRkCqjoN_&modestbranding=1&color=white"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			/>
		</div>
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
	}

	.row {
		display: grid;
		grid-template-columns: 1fr;
		column-gap: 1.5rem;
		row-gap: 0.25rem;
	}

	.details {
		order: 2;
	}

	.video {
		order: 1;
	}

	iframe {
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 9;
		border-radius: 1rem;
		background-color: var(--color-image-background);
		box-shadow: var(--image-shadow);
	}

	@media (min-width: 860px) {
		.row {
			text-align: left;
			grid-template-columns: 2fr 1fr;
		}
	}
</style>
