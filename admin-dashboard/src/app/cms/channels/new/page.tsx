import { NewChannelForm } from '@/components/forms/new-channel';
import { cookies } from 'next/headers';
import { redirect, RedirectType } from 'next/navigation';
import { Suspense } from 'react';

// TODO: Remove
type CreateChannelData = {
	ParentChannelId?: string;
	DisplayName: string;
	ImageAssetId?: string;
	YoutubeUrl?: string;
	RumbleUrl?: string;
	UrlStub: string;
};

export default async function NewChannelPage() {
	const cookieStore = await cookies();

	async function create(data: CreateChannelData) {
		'use server';
		const token = cookieStore.get('token')?.value;
		const res = await fetch(
			`${process.env.API_URL}/settings/channel/create`,
			{
				headers: {
					Authorization: token || '',
				},
				method: 'POST',
				body: JSON.stringify(data),
			}
		);

		if (res.status === 200) {
			redirect('/cms/channels', RedirectType.replace);
		}
	}

	return (
		<main className='mx-auto'>
			<Suspense fallback={<p>loading form...</p>}>
				<NewChannelForm action={create} />
			</Suspense>
		</main>
	);
}
