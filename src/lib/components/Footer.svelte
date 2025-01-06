<script>
	import Socials from '$lib/components/Socials.svelte';
</script>

<footer class="footer">
	<p class="footer-copyright">UTM Robotics 2025</p>
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
	}

	.footer-socials {
		display: flex;
		justify-content: space-around;
		gap: 3rem;
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
