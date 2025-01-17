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
	Enabled: z.boolean().default(false),
	Url: z
		.string()
		.url('Url must be a valid PayPal url')
		.nonempty('Url Must be provided'),
	ClientID: z.string().nonempty('Client ID Must be provided'),
});

export type PaypalPublicSettingsFormData = z.infer<typeof formSchema>;

type PaypalPublicSettingsFormProps = {
	action: (data: PaypalPublicSettingsFormData) => void;
};

export function PaypalPublicSettingsForm({
	action,
}: PaypalPublicSettingsFormProps) {
	const form = useForm<PaypalPublicSettingsFormData>({
		resolver: zodResolver(formSchema),
	});

	function onSubmit(data: PaypalPublicSettingsFormData) {
		action(data);
	}
	return (
		<Card className='w-[500px] p-5'>
			<CardHeader>
				<CardTitle>PayPal Public Settings</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-6'
					>
						<FormField
							control={form.control}
							name='Enabled'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Enabled: </FormLabel>
									<FormControl>
										<Switch
											checked={field.value}
											onChange={field.onChange}
										/>
									</FormControl>
									<FormDescription>
										Enable/Disable PayPal Service.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='Url'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Url</FormLabel>
									<FormControl>
										<Input placeholder='url' {...field} />
									</FormControl>
									<FormDescription>
										Url provided by PayPal
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>{' '}
						<FormField
							control={form.control}
							name='ClientID'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Client Id</FormLabel>
									<FormControl>
										<Input
											placeholder='Client Id'
											{...field}
										/>
									</FormControl>
									<FormDescription>
										Client Id provided by Paypal
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
