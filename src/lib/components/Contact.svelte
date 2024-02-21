<script lang="ts">
	import emailjs from '@emailjs/browser';

	const handleSubmit = (e: Event) => {
		emailjs
			.sendForm(
				import.meta.env.REACT_APP_EMAILJS_SERVICE_ID,
				import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				e.target as HTMLFormElement,
				{ publicKey: import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY }
			)
			.then(
				() => {
					alert("Thanks for contacting us! We'll be in touch soon.");
				},
				() => {
					alert(
						"Oops, the email couldn't send! Try again tomorrow, or email us with our email instead."
					);
				}
			)
			.finally(() => {
				(e.target as HTMLFormElement).reset();
			});
	};
</script>

<section class="contact" id="contact-us">
	<h2 class="section-header">Contact Us</h2>

	<div class="contact-content">
		<div class="contact-info">
			<h3>Email</h3>
			<p>robotics@utmsu.ca</p>

			<br />

			<h3>Address</h3>
			<p>
				DH 2014 (Hacklab), Deerfield Hall
				<br />
				1535 Outer Circle
				<br />
				Mississauga, ON
			</p>
		</div>

		<form class="contact-form" on:submit|preventDefault={handleSubmit}>
			<label>
				Name:
				<input type="name" name="name" />
			</label>

			<label>
				Email:
				<input type="email" name="email" />
			</label>
			<br />

			<label>
				Message:
				<textarea name="message"></textarea>
			</label>
			<br />
			<button type="submit">Submit</button>
		</form>
	</div>
</section>

<style>
	.contact {
		margin: 0 auto;
	}

	/* Add your preferred styles for the overall container */
	.contact-content {
		border-radius: 1rem;
		align-items: center;
		padding: 2rem 1rem 1.5rem;
		background-color: #111111;
		display: flex;
		border: 1px solid #333333;
		border-radius: 0.5rem;
		flex-wrap: wrap;
	}

	/* Style for the contact information section */
	.contact-info {
		flex: 1;
		text-align: center;
		line-height: 2;
		font-size-adjust: 0.75;
	}

	.contact-info h3 {
		color: white;
	}

	.contact-info p {
		color: #9b9b9b;
		margin-bottom: 0.75rem;
	}

	.contact-form {
		flex: 1;
	}

	.contact-form label {
		display: block;
		margin-bottom: 1rem;
	}

	.contact-form input,
	.contact-form textarea {
		background-color: #333333;
		font-size: 1rem;
		width: 100%;
		padding: 0.25rem;
		min-height: 2.5rem;
		margin-top: 0.5rem;
		/* margin-bottom: 1rem; */
		box-sizing: border-box;
		border-width: 0;
		border-radius: 0.25rem;
	}

	.contact-form textarea {
		height: 150px; /* Adjust the height as needed */
		resize: vertical; /* Allow vertical resizing */
	}

	.contact-form button {
		background-color: var(--accent);
		color: #000;
		padding: 0.65rem 0.85rem;
		border: none;
		border-radius: 0.75rem;
		cursor: pointer;
	}

	.contact-form button:hover {
		background-color: #45a049;
	}

	@media screen and (max-width: 750px) {
		.contact-content {
			flex-direction: column;
		}
	}
</style>
