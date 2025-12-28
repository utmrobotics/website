<script module>
	import Socials from '$lib/components/Socials.svelte';

	let scrollY = 0;
	let lastScrollY = 0;

	const handleScroll = () => {
		const header = document.querySelector('.header');

		if (!header) return;

		if (scrollY < lastScrollY) {
			header.classList.remove('header-hidden');
		} else {
			header.classList.add('header-hidden');
		}

		lastScrollY = scrollY;
	};
</script>

<script>
	import logo from '$lib/assets/mono-robotics-logo.svg';
</script>

<svelte:window bind:scrollY on:scroll={handleScroll} />

<nav class="header">
	<div class="header-logo">
		<img class="header-logo-img" src={logo} alt="Robotics Logo" />
		<span class="header-logo-wordmark upper-style">UTM Robotics</span>
	</div>

	<div class="header-socials">
		<Socials />
	</div>
</nav>

<style>
	.header {
		backdrop-filter: blur(15px);
		background-color: black;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		left: 0;
		padding: 1.5rem 1.5rem;
		position: sticky;
		top: 0;
		transition: 300ms ease;
		z-index: 4;
	}

	.header-logo-img {
		margin: auto 0;
		aspect-ratio: 1 / 1;
		width: 4rem;
	}

	.header-logo-wordmark {
		display: inline-block;
		width: max-content;
		margin: auto;
		margin-left: 0.5rem;
		font-size: 1.5rem;
	}

	.header-socials {
		display: flex;
		flex-basis: 100%;
		flex-direction: row;
		flex-wrap: nowrap;
		gap: 1.25rem;
		justify-content: end;
		margin: auto 0.5rem auto 0;
	}

	:global(.header-hidden) {
		transform: translateY(-100%);
		transition: all 100ms ease;
	}

	.header-logo {
		cursor: pointer;
		display: flex;
		flex-basis: 100%;
		flex-direction: row;
		justify-content: space-around;
	}

	@media screen and (max-width: 750px) {
		.header {
			flex-direction: column;
		}
	}
</style>
