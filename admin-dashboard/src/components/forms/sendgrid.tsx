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

const ownerFormSchema = z.object({
	Enabled: z.boolean().default(false),
	ApiKeySecret: z.string().nonempty(),
	SendFromAddress: z
		.string({ message: 'Send From Address Is Required' })
		.email({ message: 'Send From Address Must Be An Email' }),
});

export type SendgridOwnerSettings = z.infer<typeof ownerFormSchema>;

type SendgridOwnerSettingsFormProps = {
	action: (data: SendgridOwnerSettings) => Promise<void>;
};

export function SendgridOwnerSettingsForm() {
	const form = useForm<SendgridOwnerSettings>({
		resolver: zodResolver(ownerFormSchema),
	});

	async function onSubmit(values: SendgridOwnerSettings) {
		//await action(values);
	}

	return (
		<Card className='w-[500px] p-5'>
			<CardHeader>
				<CardTitle>Sendgrid Owner Settings</CardTitle>
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
										Enable/Disable Sendgrid Service.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='ApiKeySecret'
							render={({ field }) => (
								<FormItem>
									<FormLabel>API Key Secret</FormLabel>
									<FormControl>
										<Input
											placeholder='api key'
											{...field}
										/>
									</FormControl>
									<FormDescription>
										ApiKey Provided By SendGrid
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='SendFromAddress'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Send From Address</FormLabel>
									<FormControl>
										<Input
											placeholder='example@example.com'
											{...field}
										/>
									</FormControl>
									<FormDescription>
										Email Users Will Receive Your
										Notifications From.
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
