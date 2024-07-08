import { BodyType } from '../../types/types.js';

const HOST = import.meta.env.VITE_HOST || 'http://localhost:3333';

export async function fetchCreateUser(body: BodyType) {
	try {
		const response = await fetch(`${HOST}/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		return await response.json();
	} catch (error) {
		console.error('Failed to fetch data:', error);
		throw error;
	}
}
