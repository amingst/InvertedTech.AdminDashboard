import { NewChannelForm } from '@/components/forms/new-channel';
import NewEntityPage from '@/components/pages/new-entity';

export default function NewChannelPage() {
	return (
		<NewEntityPage
			FormComponent={NewChannelForm}
			apiUrl='/settings/channel/create'
		/>
	);
}
