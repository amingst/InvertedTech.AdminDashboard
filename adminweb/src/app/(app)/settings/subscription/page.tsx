import SubscriptionTierAccordion from '@/components/settings/subscription/tiers/subscription-tier-accordion';

const tiers = [
	{
		Name: 'Basic',
		Description: "You're Basic Bro...",
		Color: 'orange',
		AmountCents: 500,
	},
	{
		Name: 'Bronze',
		Description: 'Meh...',
		Color: 'bronze',
		AmountCents: 1000,
	},
	{
		Name: 'Silver',
		Description: 'Nice...',
		Color: 'silver',
		AmountCents: 2500,
	},
	{
		Name: 'Gold',
		Description: 'You Rock...',
		Color: 'gold',
		AmountCents: 5000,
	},
];

export default function SubscriptionSettings() {
	return (
		<>
			<SubscriptionTierAccordion tiers={tiers} />
		</>
	);
}
