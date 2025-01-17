import {
	FakePublicSettingsForm,
	FakePublicSettingsFormData,
} from '@/components/forms/fake-public';

export default function SubscriptionSettingsFakePage() {
	async function submitPublicSettings(data: FakePublicSettingsFormData) {
		'use server';
		console.log(data);
	}
	return (
		<main>
			<FakePublicSettingsForm action={submitPublicSettings} />
		</main>
	);
}
