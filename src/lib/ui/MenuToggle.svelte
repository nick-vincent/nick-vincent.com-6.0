<script>
	export let open = false;

	const onClick = () => {
		open = !open;
		window.scrollTo(0, 0);
	};
</script>

<button
	aria-haspopup="true"
	aria-controls="navigation"
	aria-expanded={open ? 'true' : 'false'}
	on:click={onClick}
>
	<span class="visually-hidden">
		{#if open}
			Close navigation menu
		{:else}
			Open navigation menu
		{/if}
	</span>
	<span class="hamburger" aria-hidden="true">
		<span class="top" />
		<span class="bottom" />
		<span class="clockwise" />
		<span class="counterwise" />
	</span>
</button>

<style>
	button {
		z-index: 3;
		cursor: pointer;
		display: block;
		position: relative;
		pointer-events: auto;
		appearance: none;
		left: 0;
		top: 0;
		width: 3rem;
		height: 3rem;
		border: none;
		border-radius: 0;
		background: none;
		opacity: 0.65;
		transition:
			var(--transition-theme),
			opacity 200ms var(--ease-standard);
	}

	button:active {
		background: none;
	}

	button::before {
		inset: 0;
	}

	button:focus {
		opacity: 1;
	}

	@media (hover: hover) {
		button:hover {
			opacity: 1;
		}
	}

	.hamburger {
		display: block;
		position: absolute;
		inset: 1rem;
	}

	.top,
	.bottom,
	.clockwise,
	.counterwise {
		position: absolute;
		display: block;
		height: 2px;
		width: 100%;
		left: 0;
		top: calc(50% - 1px);
		background-color: var(--color-ui);
		border-radius: 999em;
	}

	.top {
		transform: translateY(calc(-0.5rem + 3px));
	}
	.bottom {
		transform: translateY(calc(0.5rem - 3px));
	}
	.top,
	.bottom {
		transition:
			var(--transition-theme),
			transform var(--duration-menu) var(--ease-decelerate) var(--duration-menu),
			opacity 0ms var(--duration-menu);
	}
	[aria-expanded='true'] .top,
	[aria-expanded='true'] .bottom {
		opacity: 0;
		transform: translateY(0);
		transition:
			var(--transition-theme),
			transform var(--duration-menu) var(--ease-accelerate),
			opacity 0ms var(--duration-menu);
	}

	.clockwise,
	.counterwise {
		transition:
			var(--transition-theme),
			transform var(--duration-menu) var(--ease-accelerate),
			opacity 0ms var(--duration-menu);
	}
	.clockwise {
		opacity: 0;
	}
	[aria-expanded='true'] .clockwise,
	[aria-expanded='true'] .counterwise {
		opacity: 1;
		transition:
			var(--transition-theme),
			transform var(--duration-menu) var(--ease-decelerate) var(--duration-menu),
			opacity 0ms var(--duration-menu);
	}
	[aria-expanded='true'] .clockwise {
		transform: rotate(45deg);
	}
	[aria-expanded='true'] .counterwise {
		transform: rotate(-45deg);
	}

	@media print {
		button {
			display: none;
		}
	}
</style>
