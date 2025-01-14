'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
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

const newCategorySchema = z.object({
	DisplayName: z
		.string()
		.min(3, {
			message: 'Display Name Must Be At Least 3 Characters',
		})
		.nonempty('Display Name Must Not Be Empty'),
	UrlStub: z
		.string()
		.min(3, {
			message: 'URL Stub Must Be At Least 3 Characters',
		})
		.nonempty('URL Stub Must Not Be Empty'),
	ParentChannelId: z.string().optional(),
});

export type NewCategory = z.infer<typeof newCategorySchema>;

type NewCategoryFormProps = {
	action: (data: NewCategory) => Promise<void>;
};

export function NewCategoryForm({ action }: NewCategoryFormProps) {
	const form = useForm<NewCategory>({
		resolver: zodResolver(newCategorySchema),
	});

	async function onSubmit(values: NewCategory) {
		await action(values);
	}

	return (
		<Card className='w-[500px] p-5'>
			<CardHeader>
				<CardTitle>Create A New Category</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-8'
					>
						<FormField
							control={form.control}
							name='DisplayName'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Display Name</FormLabel>
									<FormControl>
										<Input
											placeholder='My Super Cool Channel'
											{...field}
										/>
									</FormControl>
									<FormDescription>
										This is the name of your channel.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='UrlStub'
							render={({ field }) => (
								<FormItem>
									<FormLabel>URL Stub</FormLabel>
									<FormControl>
										<Input
											placeholder='my-super-cool-channel'
											{...field}
										/>
									</FormControl>
									<FormDescription>
										This is the url that users will navigate
										to (We'll add the '/channel/')
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='ParentChannelId'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Parent Channel Id</FormLabel>
									<FormControl>
										<Input placeholder='id' {...field} />
									</FormControl>
									<FormDescription>
										This is the parent of the channel you
										want to add (if any)
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type='submit'>Submit</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
