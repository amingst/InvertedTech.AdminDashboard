import { Channel } from '@/types';
import { Card, CardContent } from '../ui/card';
import Link from 'next/link';

export function ChannelList({ channels }: { channels: Channel[] }) {
	if (channels.length === 0) {
		return (
			<Link href={'/cms/channels/new'}>Click To Add A new Channel</Link>
		);
	} else {
		return (
			<Card>
				<CardContent>
					{channels.map((channel) => (
						<ChannelListItem channel={channel} />
					))}
				</CardContent>
			</Card>
		);
	}
}

export function ChannelListItem({ channel }: { channel: Channel }) {
	return (
		<Link href={`/cms/channels/${channel.ChannelId}`}>
			{channel.DisplayName}
		</Link>
	);
}
