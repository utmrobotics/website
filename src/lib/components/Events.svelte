<script lang="ts">
	import type { EventProps } from '$lib/types';

	const {
		events
	}: {
		events: EventProps[];
	} = $props();
</script>

<div class="eventContainer">
	{#if events.length === 1}
		<h1 class="header">Upcoming events</h1>
	{/if}
	{#if events.length > 1}
		<h1 class="header">Upcoming events</h1>
	{/if}

	<div class="events">
		{#each events as event (event.name)}
			<div class="card">
				<div class="cardface">
					<p>{event.name}</p>
				</div>
				<div class="cardHeader overlay">
					<span class="eventName">{event.name}</span>
				</div>
				<div class="cardFooter overlay">
					<div class="footDetails">
						{#if event.description}
							<span class="eventDetails">{event.description}</span>
						{/if}
						<div class="venueGrid">
							<span>{event.venue}</span>
							<span
								>{new Date(event.date).toLocaleString('en-US', {
									month: 'long',
									day: 'numeric',
									year: 'numeric',
									hour: 'numeric',
									minute: 'numeric'
								})}</span
							>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.eventContainer {
		margin: 0;
		padding: 0rem 1rem 2rem;
		display: relative;
	}

	.eventContainer .header {
		font-size: 1.525rem;
		text-align: center;
		margin: 0rem 3rem 1.5rem;
	}

	.events {
		display: flex;
		width: 100%;

		align-items: center;
		justify-content: center;

		flex-wrap: nowrap;
		flex-direction: row;
	}

	/* CARD ALIGNMENT AND ANIMATIONS */
	.card {
		position: relative;
		width: 13rem;
		height: 16rem;
		align-items: center;

		border-radius: 0.5rem;
		box-sizing: border-box;
		overflow: hidden;

		color: aliceblue;

		transition: all 250ms ease-in-out;
	}

	.card .cardface p {
		color: white;
	}

	.card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(70deg, rgba(4, 138, 101, 0.492) 0%, rgba(255, 255, 255, 0) 50%);
	}

	/* Have cards laid into one another */
	.card:not(:first-child) {
		margin-left: -2.25rem;
	}

	/* Pop up */
	.card:hover {
		transform: translateY(-1rem);
		box-shadow: -1px 1px 10px 1px 0;
	}

	/* Move succeeding cards to the right  */
	.card:hover ~ .card {
		transform: translateX(3rem);
	}

	/* OVERLAY */

	.overlay {
		position: absolute;

		left: 0;
		right: 0;

		height: 0;
		width: 100%;

		background-color: #111111;

		overflow: hidden;
		transition: 250ms ease;
	}

	.cardHeader {
		top: 0;
	}

	.cardFooter {
		bottom: 0;
	}

	.card:hover .cardHeader {
		height: 20%;
	}

	.card:hover .cardFooter {
		height: 77.5%;
	}

	/* Event Details */

	.overlay span {
		display: block;

		padding: 0 1.25rem;
		width: fit-content;
		height: fit-content;

		font-size: 0.67rem;
		text-align: center;
	}

	.cardHeader .eventName {
		font-size: 0.825rem;

		position: absolute;
		top: 50%;

		transform: translateY(-50%);
		-ms-transform: translateY(-50%);
	}

	.cardFooter .footDetails {
		position: absolute;
		top: 50%;

		transform: translateY(-50%);
		-ms-transform: translateY(-50%);
	}

	.footDetails .eventDetails {
		display: inline-block;

		vertical-align: middle;
		text-align: center;

		height: 6rem;
		overflow-y: scroll;
	}

	.footDetails .venueGrid {
		display: flex;

		margin: 0;
		margin-bottom: 1rem;
		padding: 0 1.25rem;

		flex-wrap: wrap;
		justify-content: space-between;

		line-height: 2rem;
	}

	.venueGrid span {
		flex: 1 1 auto;
		position: relative;
		text-align: center;
		padding: 0;
	}

	.venueGrid span + span {
		border-left: 0.5px solid 0.116655;
	}

	/* CARDFACE */

	.cardface {
		display: flex;
		align-items: center;

		margin: 0;
		height: 100%;

		background-color: 0.116655;
	}

	.cardface p {
		color: black;

		font-size: 1.225rem;
		text-align: center;

		padding: 2rem 2rem;
	}

	@media screen and (max-width: 600px) {
		.events {
			justify-content: row;
			flex-wrap: wrap;
			flex-direction: row;
		}

		.events .card {
			width: 12rem;
			height: 16rem;
			font-size: 0.8rem;
		}

		.card:not(:first-child) {
			margin-left: -2.25rem;
		}

		.events .card:nth-child(2n + 1) {
			margin-left: 0;
		}
		/*
        .card:not(:first-child){

        } */

		/* .card:hover{
            box-shadow: -1px 1px 10px 1px .000;
        }

        .card:hover ~ .card {
            transform: translateX(0);
        } */

		.cardHeader .eventName {
			font-size: 0.8rem;
		}

		.footDetails .eventDetails {
			font-size: 0.65rem;
		}

		.venueGrid span {
			font-size: 0.6rem;
		}

		.cardface p {
			font-size: 0.8rem;
		}
	}
</style>
