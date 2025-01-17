'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '../ui/switch';

const formSchema = z.object({
	ClientSecret: z.string().nonempty('Client Secret Must be provided'),
});

export type PaypalOwnerSettingsFormData = z.infer<typeof formSchema>;

type PaypalOwnerSettingsFormProps = {
	action: (data: PaypalOwnerSettingsFormData) => void;
};

export function PaypalOwnerSettingsForm({
	action,
}: PaypalOwnerSettingsFormProps) {
	const form = useForm<PaypalOwnerSettingsFormData>({
		resolver: zodResolver(formSchema),
	});

	function onSubmit(data: PaypalOwnerSettingsFormData) {
		action(data);
	}

	return (
		<Card className='w-[500px] p-5'>
			<CardHeader>
				<CardTitle>Paypal Owner Settings</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-6'
					>
						<FormField
							control={form.control}
							name='ClientSecret'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Client Sected</FormLabel>
									<FormControl>
										<Input
											placeholder='Account'
											{...field}
											type='password'
										/>
									</FormControl>
									<FormDescription>
										Account provided by Paypal
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
