import {
	PaypalOwnerSettingsForm,
	PaypalOwnerSettingsFormData,
} from '@/components/forms/paypal-owner';
import {
	PaypalPublicSettingsForm,
	PaypalPublicSettingsFormData,
} from '@/components/forms/paypal-public';

export default function SubscriptionSettingsPaypalPage() {
	async function submitPublicSettings(data: PaypalPublicSettingsFormData) {
		'use server';
		console.log(data);
	}

	async function submitOwnerSettings(data: PaypalOwnerSettingsFormData) {
		'use server';
		console.log(data);
	}
	return (
		<main>
			<PaypalPublicSettingsForm action={submitPublicSettings} />
			<PaypalOwnerSettingsForm action={submitOwnerSettings} />
		</main>
	);
}
