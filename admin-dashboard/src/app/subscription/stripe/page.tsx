import {
	StripeOwnerSettingsForm,
	StripeOwnerSettingsFormData,
} from '@/components/forms/stripe-owner';
import {
	StripePublicSettingsForm,
	StripePublicSettingsFormData,
} from '@/components/forms/stripe-public';

export default function SubscriptionSettingsStripePage() {
	async function submitPublicSettings(data: StripePublicSettingsFormData) {
		'use server';
		console.log(data);
	}

	async function submitOwnerSettings(data: StripeOwnerSettingsFormData) {
		'use server';
		console.log(data);
	}

	return (
		<main>
			<StripePublicSettingsForm action={submitPublicSettings} />
			<StripeOwnerSettingsForm action={submitOwnerSettings} />
		</main>
	);
}
