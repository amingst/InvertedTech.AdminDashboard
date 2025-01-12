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

const formSchema = z.object({
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
	ImageAssetId: z.string().optional(),
	YoutubeUrl: z
		.string()
		.url('Youtube URL must be the url of your YouTube Channel')
		.optional(),
	RumbleUrl: z
		.string()
		.url('Rumble URL must be the url of your Rumble')
		.optional(),
});

type NewChannelFormProps = {
	action: (data: z.infer<typeof formSchema>) => Promise<void>;
};

export function NewChannelForm({ action }: NewChannelFormProps) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		await action(values);
	}

	return (
		<Card className='w-[500px] p-5'>
			<CardHeader>
				<CardTitle>Create A New Channel</CardTitle>
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
							name='ImageAssetId'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Image Asset Id</FormLabel>
									<FormControl>
										<Input placeholder='id' {...field} />
									</FormControl>
									<FormDescription>
										This is the asset id of your channel
										(the icon you choose for your channel)
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
						<FormField
							control={form.control}
							name='YoutubeUrl'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Youtube Url</FormLabel>
									<FormControl>
										<Input
											placeholder='https://youtube.com/channel'
											{...field}
										/>
									</FormControl>
									<FormDescription>
										This is the Url of your Youtube Channel
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='RumbleUrl'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Rumble Url</FormLabel>
									<FormControl>
										<Input
											placeholder='https://rumble.com/channel'
											{...field}
										/>
									</FormControl>
									<FormDescription>
										This is the Url of your Rumble Channel
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
