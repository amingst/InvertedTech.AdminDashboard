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
import { Switch } from '@/components/ui/switch';
import { Select } from '@/components/ui/select'; // Assuming you have a Select component for dropdowns

// Zod schema for form validation
const publicFormSchema = z.object({
	Enabled: z.boolean().default(true),
	DefaultOrder: z.string().nonempty('Default Order Must Be Provided'),
	DefaultRestriction: z.object({
		Minimum: z.string().nonempty('Minimum Role Restriction Is Required'),
		Level: z.number().default(0),
	}),
	ExplicitModeEnabled: z.boolean().default(true),
});

export type PublicCommentsSettings = z.infer<typeof publicFormSchema>;

type PublicCommentsSettingsFormProps = {
	action: (data: PublicCommentsSettings) => Promise<void>;
};

export function PublicCommentsSettingsForm() {
	const form = useForm<PublicCommentsSettings>({
		resolver: zodResolver(publicFormSchema),
	});

	async function onSubmit(values: PublicCommentsSettings) {
		// Handle form submission
		console.log(values);
	}

	return (
		<Card className='w-[500px] p-5'>
			<CardHeader>
				<CardTitle>Public Comments Settings</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-6'
					>
						{/* Switch for 'Enabled' */}
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
										Enable/Disable Comments.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Switch for 'ExplicitModeEnabled' */}
						<FormField
							control={form.control}
							name='ExplicitModeEnabled'
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Enable Explicit Mode:{' '}
									</FormLabel>
									<FormControl>
										<Switch
											checked={field.value}
											onChange={field.onChange}
										/>
									</FormControl>
									<FormDescription>
										Enable/Disable Explicit Mode.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Input for 'DefaultOrder' */}
						<FormField
							control={form.control}
							name='DefaultOrder'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Default Order: </FormLabel>
									<FormControl>
										<Input
											{...field}
											placeholder='Enter default order'
										/>
									</FormControl>
									<FormDescription>
										Specify the default order.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Nested fields for 'DefaultRestriction' */}

						{/* 'Minimum' Role */}
						<FormField
							control={form.control}
							name='DefaultRestriction.Minimum'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Minimum Role: </FormLabel>
									<FormControl>
										<Select {...field}>
											<option value='Anonymous'>
												Anonymous
											</option>
											<option value='Registered'>
												Registered
											</option>
											<option value='Verified'>
												Verified
											</option>
										</Select>
									</FormControl>
									<FormDescription>
										Set the minimum role restriction.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* 'Level' */}
						<FormField
							control={form.control}
							name='DefaultRestriction.Level'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Level: </FormLabel>
									<FormControl>
										<Input
											{...field}
											type='number'
											placeholder='Enter the level'
										/>
									</FormControl>
									<FormDescription>
										Specify the restriction level.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<button
							type='submit'
							className='w-full bg-blue-500 text-white py-2 rounded-md'
						>
							Submit
						</button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
