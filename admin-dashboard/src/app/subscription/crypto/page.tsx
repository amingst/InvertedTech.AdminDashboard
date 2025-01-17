import {
	CryptoPublicSettingsForm,
	CryptoPublicSettingsFormData,
} from '@/components/forms/crypto-public';

export default function SubscriptionSettingsCryptoPage() {
	async function submitPublicSettings(data: CryptoPublicSettingsFormData) {
		'use server';
		console.log(data);
	}
	return (
		<main>
			<CryptoPublicSettingsForm action={submitPublicSettings} />
		</main>
	);
}
