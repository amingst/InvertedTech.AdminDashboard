import FormButton from '@/components/ui/form-button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function CryptoProviderForm() {
	return (
		<form className='space-y-4'>
			<div>
				<Label htmlFor='Enabled'>Enabled</Label>
				<Switch />
			</div>
			<FormButton text='Submit' />
		</form>
	);
}
