import { SendgridOwnerSettingsForm } from '@/components/forms/sendgrid';
import NewEntityPage from '@/components/pages/new-entity';

export default function NotificationSettingsPage() {
	return (
		<NewEntityPage
			FormComponent={SendgridOwnerSettingsForm}
			apiUrl='/settings/notification/owner'
		/>
	);
}
