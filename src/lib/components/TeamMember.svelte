<script lang="ts">
	import Fa from 'svelte-fa';
	import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
	import noImage from '$lib/assets/none.png';
	import type { TeamMemberProps } from '$lib/team/team';

	const { name, role, bio, image, linkedin, github }: TeamMemberProps = $props();
</script>

<div class="about-team-members-member">
	{#if image}
		<img src={image} alt="" />
	{:else}
		<img src={noImage} alt="" />
	{/if}
	<div class="about-team-members-desc">
		<div class="about-team-members-title">
			<h3 class="about-team-members-name">{name}</h3>
		</div>

		{#if role}
			<p class="about-team-members-role">{role}</p>
		{/if}
		{#if bio}
			<p class="about-team-members-bio">{bio}</p>
		{/if}
		{#if linkedin || github}
			<div class="about-team-members-socials">
				{#if linkedin}
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL -->
					<a href={linkedin} target="_blank" rel="noopener noreferrer" title="{name}'s LinkedIn">
						<Fa icon={faLinkedin} />
					</a>
				{/if}

				{#if github}
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL -->
					<a href={github} target="_blank" rel="noopener noreferrer" title="{name}'s GitHub">
						<Fa icon={faGithub} />
					</a>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	.about-team-members-member {
		border-radius: 1rem;
		border: 3px solid transparent;
		box-sizing: border-box;
		gap: 0.5rem;
		margin: 1rem 1rem;
		transition: transform 300ms ease-in-out;
		width: 12rem;
		height: fit-content;
	}

	img {
		border-radius: 1rem 1rem 0 0;
		display: block;
		margin: 0 auto;
		width: 100%;
	}

	.about-team-members-member:hover {
		/* transform: scale(1.1); */
		border-color: var(--accent);
		/* z-index: 5; */
	}

	.about-team-members-title {
		display: flex;
		justify-content: center;
		flex-direction: column;
		margin-bottom: 0;
	}

	.about-team-members-name {
		font-size: 1.5rem;
		text-align: center;
	}

	.about-team-members-desc {
		background-color: black;
		border-bottom-left-radius: 1rem;
		border-bottom-right-radius: 1rem;
		bottom: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		color: snow;
		height: fit-content;
		padding: 1.5rem 0;
		position: relative;
		transition: all 300ms ease-in-out;
	}

	.about-team-members-socials {
		display: flex;
		justify-content: space-evenly;
		margin-top: 0.5rem;

		& a {
			color: snow;
			opacity: 0.75;
			font-size: 1.25rem;
			transition: all 300ms ease-in-out;

			&:hover,
			&:focus {
				color: var(--accent);
				opacity: 1;
			}
		}
	}

	.about-team-members-role {
		color: gray;
		margin-top: 0.15rem;
		text-align: center;
	}

	.about-team-members-bio {
		background-color: rgba(252, 244, 218, 0);
		border-radius: 8px;
		border: 2px solid transparent;
		color: transparent;
		left: 3rem;
		padding: 0.5rem;
		position: absolute;
		text-align: center;
		bottom: 10rem;
		transition: all 250ms ease-in-out;
		z-index: -1;
	}

	.about-team-members-member:hover .about-team-members-bio {
		background-color: rgb(252, 244, 218);
		color: #000000;
		border: 2px solid #00000000;
		z-index: 5;
	}
</style>
