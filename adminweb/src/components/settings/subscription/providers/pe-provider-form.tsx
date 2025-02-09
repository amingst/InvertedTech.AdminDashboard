import FormButton from '@/components/ui/form-button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function PEProviderForm() {
	return (
		<form className='space-y-4'>
			<div>
				<Label htmlFor='Enabled'>Enabled</Label>
				<Switch id='Enabled' name='Enabled' />
			</div>
			<div>
				<Label htmlFor='IsTest'>IsTest</Label>
				<Switch id='IsTest' name='IsTest' />
			</div>
			<FormButton text='Submit' />
		</form>
	);
}
