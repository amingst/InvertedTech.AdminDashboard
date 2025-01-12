import { ChannelList } from '@/components/channel/channel-list';
import { Suspense } from 'react';

export default function CMSSettingsChannelPage() {
	return (
		<main className='mx-auto'>
			<Suspense fallback={<p>loading channels</p>}>
				<ChannelList channels={[]} />
			</Suspense>
		</main>
	);
}
