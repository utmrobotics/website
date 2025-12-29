<script lang="ts">
	import { team, expires, type TeamMemberProps } from '$lib/team/team';
	import TeamMember from '$lib/components/TeamMember.svelte';

	const today = new Date();
</script>

{#if today.getTime() < expires.getTime()}
	<section class="about-team">
		<h2 class="section-header">Meet the Team</h2>

		<div class="about-team-members">
			{#each team as member (member.name)}
				<TeamMember {...member as TeamMemberProps} />
			{/each}
		</div>
	</section>
{/if}

<style>
	.about-team {
		background-image: url($lib/assets/circuit-board.svg);
		box-shadow: 0px 2rem 15rem 16em #000000 inset;
		padding: 0.25rem 0;
	}

	.about-team-members {
		/* width: 85%; */
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		margin: 0 auto;
	}
</style>
