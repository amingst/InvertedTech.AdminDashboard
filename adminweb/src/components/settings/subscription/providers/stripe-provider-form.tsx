import FormButton from '@/components/ui/form-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function StripeProviderForm() {
	return (
		<form className='space-y-4'>
			<div>
				<Label htmlFor='Enabled'>Enabled</Label>
				<Switch id='Enabled' name='Enabled' />
			</div>
			<div>
				<Label htmlFor='Url'>Url</Label>
				<Input name='Url' id='Url' />
			</div>
			<FormButton text='Submit' />
		</form>
	);
}
