import { Suspense } from 'react';
import { handleResponse } from '@/lib/api';
import { cookies } from 'next/headers';

type NewEntityPageProps = {
	FormComponent: React.ComponentType<any>;
	apiUrl: string;
};

export default async function NewEntityPage({
	FormComponent,
	apiUrl,
}: NewEntityPageProps) {
	const cookieStore = await cookies();

	async function create(data: any) {
		'use server';
		const token = cookieStore.get('token')?.value;
		const res = await fetch(`${process.env.API_URL}${apiUrl}`, {
			headers: {
				Authorization: token || '',
			},
			method: 'POST',
			body: JSON.stringify(data),
		});

		handleResponse(
			res.status,
			`/cms${apiUrl.split('/').slice(1).join('/')}`
		);
	}

	return (
		<main className='mx-auto'>
			<Suspense fallback={<p>loading form...</p>}>
				<FormComponent action={create} />
			</Suspense>
		</main>
	);
}
