export const load = async ({ fetch }) => {
	return fetch('/api/events?upcoming').then((res) => res.json());
};
