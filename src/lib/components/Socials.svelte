<script>
	import Fa from 'svelte-fa';
	import { faInstagram, faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
</script>

<a href="https://www.instagram.com/utm_robotics/" target="_blank" title="Instagram">
	<Fa icon={faInstagram} />
</a>
<a href="https://www.linkedin.com/company/utmrobotics/" target="_blank" title="LinkedIn">
	<Fa icon={faLinkedin} />
</a>
<a href="https://github.com/utmrobotics/" target="_blank" title="GitHub">
	<Fa icon={faGithub} />
</a>
<a href="https://discord.gg/wFbtZhcXFQ" target="_blank" title="Discord Server">
	<Fa icon={faDiscord} />
</a>

<style>
	a {
		font-size: 1.5rem;
		color: white;
		opacity: 0.75;
		transition: 125ms ease-in-out opacity;

		&:hover,
		&:focus {
			color: var(--accent);
			opacity: 1;
		}
	}
</style>
