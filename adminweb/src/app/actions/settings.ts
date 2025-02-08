'use server';

const apiUrl = process.env.API_URL;

export async function GetPublicSettings() {
	const res = await fetch(`${apiUrl}/settings/public`, {
		method: 'GET',
		headers: {
			ContentType: 'application/json',
		},
	});

	const body = await res.json();

	return body;
}
