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
	UserId: z.string().nonempty('Client Secret Must be provided'),
	UserApiKey: z.string().nonempty('Api Key Must be provided'),
	LocationId: z.string().nonempty('Location Id Must be provided'),
	ProductId: z.string().nonempty('Product Id Must be provided'),
});

export type ParalellEconomyOwnerSettingsFormData = z.infer<typeof formSchema>;

type ParalellEconomyOwnerSettingsFormProps = {
	action: (data: ParalellEconomyOwnerSettingsFormData) => void;
};

export function ParalellEconomyOwnerSettingsForm({
	action,
}: ParalellEconomyOwnerSettingsFormProps) {
	const form = useForm<ParalellEconomyOwnerSettingsFormData>({
		resolver: zodResolver(formSchema),
	});

	function onSubmit(data: ParalellEconomyOwnerSettingsFormData) {
		action(data);
	}

	return (
		<Card className='w-[500px] p-5'>
			<CardHeader>
				<CardTitle>ParalellEconomy Owner Settings</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-6'
					>
						<FormField
							control={form.control}
							name='UserId'
							render={({ field }) => (
								<FormItem>
									<FormLabel>User Id</FormLabel>
									<FormControl>
										<Input placeholder='1234' {...field} />
									</FormControl>
									<FormDescription>
										ParalellEconomy User Id
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='UserApiKey'
							render={({ field }) => (
								<FormItem>
									<FormLabel>User Api Key</FormLabel>
									<FormControl>
										<Input
											placeholder='1234'
											type='password'
											{...field}
										/>
									</FormControl>
									<FormDescription>
										ParalellEconomy User Api Key
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='LocationId'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Location Id</FormLabel>
									<FormControl>
										<Input placeholder='1234' {...field} />
									</FormControl>
									<FormDescription>
										ParalellEconomy Location Id
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='ProductId'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Product Id</FormLabel>
									<FormControl>
										<Input placeholder='1234' {...field} />
									</FormControl>
									<FormDescription>
										ParalellEconomy Product Id
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
