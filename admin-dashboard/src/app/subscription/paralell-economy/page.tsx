import {
	ParalellEconomyOwnerSettingsForm,
	ParalellEconomyOwnerSettingsFormData,
} from '@/components/forms/pe-owner';
import {
	ParalellEconomyPublicSettingsForm,
	ParalellEconomyPublicSettingsFormData,
} from '@/components/forms/pe-public';

export default function SubscriptionSettingsParalellEconomyPage() {
	async function submitPublicSettings(
		data: ParalellEconomyPublicSettingsFormData
	) {
		'use server';

		console.log(data);
	}

	async function submitOwnerSettings(
		data: ParalellEconomyOwnerSettingsFormData
	) {
		'use server';
		console.log(data);
	}

	return (
		<main>
			<ParalellEconomyPublicSettingsForm action={submitPublicSettings} />
			<ParalellEconomyOwnerSettingsForm action={submitOwnerSettings} />
		</main>
	);
}
