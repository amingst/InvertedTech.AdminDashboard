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
		.url('Url must be a valid stripe url')
		.nonempty('Url Must be provided'),
});

export type StripePublicSettingsFormData = z.infer<typeof formSchema>;

type StripePublicSettingsFormProps = {
	action: (data: StripePublicSettingsFormData) => void;
};

export function StripePublicSettingsForm({
	action,
}: StripePublicSettingsFormProps) {
	const form = useForm<StripePublicSettingsFormData>({
		resolver: zodResolver(formSchema),
	});

	function onSubmit(values: StripePublicSettingsFormData) {
		console.log(values);
	}

	return (
		<Card className='w-[500px] p-5'>
			<CardHeader>
				<CardTitle>Stripe Public Settings</CardTitle>
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
										Enable/Disable Stripe Service.
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
										Url provided by stripe
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
