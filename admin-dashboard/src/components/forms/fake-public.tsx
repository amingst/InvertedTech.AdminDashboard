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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '../ui/switch';

const formSchema = z.object({
	Enabled: z.boolean().default(false),
});

export type FakePublicSettingsFormData = z.infer<typeof formSchema>;

type FakePublicSettingsFormProps = {
	action: (data: FakePublicSettingsFormData) => void;
};

export function FakePublicSettingsForm({
	action,
}: FakePublicSettingsFormProps) {
	const form = useForm<FakePublicSettingsFormData>({
		resolver: zodResolver(formSchema),
	});

	function onSubmit(values: FakePublicSettingsFormData) {
		console.log(values);
	}

	return (
		<Card className='w-[500px] p-5'>
			<CardHeader>
				<CardTitle>Fake Public Settings</CardTitle>
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
										Enable/Disable Fake Service.
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
