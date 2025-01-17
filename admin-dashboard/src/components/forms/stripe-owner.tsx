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
	Account: z.string().nonempty('Account Must be provided'),
	ClientID: z.string().nonempty('Client ID Must be provided'),
	ClientSecret: z.string().nonempty('Client Secret Must be provided'),
});

export type StripeOwnerSettingsFormData = z.infer<typeof formSchema>;

type StripeOwnerSettingsFormProps = {
	action: (data: StripeOwnerSettingsFormData) => void;
};

export function StripeOwnerSettingsForm({
	action,
}: StripeOwnerSettingsFormProps) {
	const form = useForm<StripeOwnerSettingsFormData>({
		resolver: zodResolver(formSchema),
	});

	function onSubmit() {}

	return (
		<Card className='w-[500px] p-5'>
			<CardHeader>
				<CardTitle>Stripe Owner Settings</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-6'
					>
						<FormField
							control={form.control}
							name='Account'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Account</FormLabel>
									<FormControl>
										<Input
											placeholder='Account'
											{...field}
										/>
									</FormControl>
									<FormDescription>
										Account provided by stripe
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
										Client Id provided by stripe
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>{' '}
						<FormField
							control={form.control}
							name='ClientSecret'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Client Secret</FormLabel>
									<FormControl>
										<Input
											placeholder='Client Secret'
											type='password'
											{...field}
										/>
									</FormControl>
									<FormDescription>
										Client Secret provided by stripe
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
