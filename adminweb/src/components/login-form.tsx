'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useActionState } from 'react';
import { Login } from '@/app/actions/auth';
import FormButton from './ui/form-button';

const initialState = {
	UserName: '',
	Password: '',
	MFACode: '',
};

export function LoginForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<'div'>) {
	//@ts-ignore
	const [state, formAction, pending] = useActionState(Login, initialState);
	return (
		<div className={cn('flex flex-col gap-6', className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle className='text-2xl'>Login</CardTitle>
					<CardDescription>
						Enter your UserName below to login to your account
					</CardDescription>
					{state.message && (
						<CardDescription>
							<p className='text-destructive bg-destructive/10'>
								{state.message}
							</p>
						</CardDescription>
					)}
				</CardHeader>
				<CardContent>
					<form action={formAction}>
						<div className='flex flex-col gap-6'>
							<div className='grid gap-2'>
								<Label htmlFor='UserName'>Username</Label>
								<Input
									id='UserName'
									name='UserName'
									type='text'
									placeholder='jdoe'
								/>
								{state?.errors?.UserName && (
									<p
										aria-live='polite'
										className='text-destructive bg-destructive/10'
									>
										{state.errors.UserName[0]}
									</p>
								)}
							</div>
							<div className='grid gap-2'>
								<div className='flex items-center'>
									<Label htmlFor='Password'>Password</Label>
									<a
										href='#'
										className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
									>
										Forgot your Password?
									</a>
								</div>
								<Input
									id='Password'
									name='Password'
									type='password'
								/>

								{state?.errors?.Password && (
									<p
										aria-live='polite'
										className='text-destructive bg-destructive/10'
									>
										{state.errors.Password || ''}
									</p>
								)}
							</div>
							<FormButton text='Login' pending={pending} />
							<Button variant='outline' className='w-full'>
								Login with Google
							</Button>
						</div>
						<div className='mt-4 text-center text-sm'>
							Don&apos;t have an account?{' '}
							<a
								href='#'
								className='underline underline-offset-4'
							>
								Sign up
							</a>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
