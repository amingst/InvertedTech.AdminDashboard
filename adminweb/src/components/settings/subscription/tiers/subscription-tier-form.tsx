import FormButton from '@/components/ui/form-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { SubscriptionTier } from 'invertedjs';

type SubscriptionTierFormProps = {
	className?: string;
	tier?: SubscriptionTier;
};

export default function SubscriptionTierForm({
	className,
	tier,
}: SubscriptionTierFormProps) {
	return (
		<form className={cn('space-y-4', className)}>
			<div>
				<Label htmlFor='Name'>Name</Label>
				<Input name='Name' id='Name' type='text' />
			</div>
			<div>
				<Label htmlFor='Description'>Description</Label>
				<Input name='Description' id='Description' type='text' />
			</div>
			<div>
				<Label htmlFor='Color'>Color</Label>
				<Input name='Color' id='Color' type='text' />
			</div>
			<div>
				<Label htmlFor='AmountCents'>Amount in Cents</Label>
				<Input name='AmountCents' id='AmountCents' type='number' />
			</div>
			<FormButton text='Submit' />
		</form>
	);
}
