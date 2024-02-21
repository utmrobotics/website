<script>
	import Socials from '$lib/components/Socials.svelte';
</script>

<footer class="footer">
	<p class="footer-copyright">// UTM Robotics MMXXIV</p>
	<hr class="footer-divider" />
	<div class="footer-socials">
		<Socials />
	</div>
</footer>

<style>
	.footer {
		color: white;
		position: relative;
		border: none;
		display: flex;
		padding-top: 3em;
		align-items: center;
		font-size: 1.5rem;
		justify-content: space-between;
		padding: 2em;
		gap: 1em;
	}

	.footer-copyright {
		font-weight: bold;
		text-transform: uppercase;
		word-spacing: 0.0125em;
		opacity: 0.42;
	}

	.footer-divider {
		flex-grow: 1;
		border: 1px solid white;
		opacity: 0.42;
	}

	.footer-socials {
		display: flex;
		justify-content: space-around;
		gap: 3rem;
		margin-left: 2rem;
	}

	@media screen and (max-width: 750px) {
		.footer {
			flex-direction: column;
			gap: 2rem;
		}

		.footer-socials {
			flex-direction: row;
			gap: 2rem;
		}
	}
</style>
