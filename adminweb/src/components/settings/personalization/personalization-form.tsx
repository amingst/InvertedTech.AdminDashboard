import FormButton from '@/components/ui/form-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { PersonalizationPublicRecord } from 'invertedjs';

type PersonalizationFormProps = {
	className?: string;
	settings?: PersonalizationPublicRecord;
};

// TODO: Add Image Fields
export default function PersonalizationForm({
	className,
	settings,
}: PersonalizationFormProps) {
	return (
		<form className={cn('space-y-4', className)}>
			<div>
				<Label htmlFor='Title'>Site Title</Label>
				<Input name='Title' id='Title' type='text' />
			</div>
			<div>
				<Label htmlFor='MetaDescription'>Site MetaDescription</Label>
				<Input
					name='MetaDescription'
					id='MetaDescription'
					type='text'
				/>
			</div>
			<div>
				<Label htmlFor='DefaultToDarkMode'>Default To Dark Mode?</Label>
				<Switch name='DefaultToDarkMode' id='DefaultToDarkMode' />
			</div>
			<FormButton text='Submit' />
		</form>
	);
}
