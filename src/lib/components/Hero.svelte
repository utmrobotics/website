<section class="hero">
	<div class="hero-desc">
		<h1 class="hero-desc-title">UTM&apos;s home for Robotics.</h1>
		<p class="hero-desc-text">
			At UTM Robotics club, we <em>foster a dynamic community</em> for enthusiasts, hobbyists, and
			newcomers alike. Our mission is to{' '}
			<em>inspire, educate, and innovate</em> within the ever-evolving field of robotics, for people
			of <em>all levels of experience</em>.
		</p>
	</div>
</section>

<style>
	.hero {
		/* width: 80%; */
		margin: 0 auto;
		z-index: -1;
		background: linear-gradient(#000000d0, #000000d0), url('$lib/assets/hero.svg');
		box-shadow: 0 0 8em 8em #000000 inset;
		height: 70vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.hero-desc {
		z-index: 1;
		align-items: center;
		text-align: center;
		gap: 1rem;
		width: max(50%, 30rem);
		text-align: center;
		max-width: 100vw;
	}

	.hero-desc-text {
		margin: 1rem 0;
		font-size: 1.25rem;
		line-height: 1.5;
		color: rgb(161, 161, 161);

		& em {
			font-style: normal;
			color: white;
			font-weight: bold;
		}
	}

	.hero-desc-title {
		font-size: calc(1.5rem + 1vw);
	}

	.hero::after {
		content: '';
		position: absolute;
		top: 10em;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		background-image:
			linear-gradient(rgba(0, 0, 0, 0.4), rgb(0, 0, 0)), url('$lib/assets/greenthings.svg');
		background-size: 100% 100%;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
