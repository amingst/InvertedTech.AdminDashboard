import { Loader2 } from 'lucide-react';
import { Button } from './button';

export default function FormButton({
	text,
	pending = false,
}: {
	text: string;
	pending?: boolean;
}) {
	return (
		<>
			{pending ? (
				<Button disabled className='w-full'>
					<Loader2 className='animate-spin' />
					Please wait
				</Button>
			) : (
				<Button type='submit' className='w-full'>
					{text}
				</Button>
			)}
		</>
	);
}
