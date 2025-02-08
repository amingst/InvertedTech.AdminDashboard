'use server';
import { AuthenticateUserResponse } from 'invertedjs';
import { loginSchema } from '@/lib/schemas/loginSchema';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const apiUrl = process.env.API_URL;

export async function Login(prevState: any, formData: FormData) {
	const validatedFields = await loginSchema.safeParseAsync({
		UserName: formData.get('UserName'),
		Password: formData.get('Password'),
		MFACode: '',
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		};
	}

	const res = await fetch(`${apiUrl}/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			UserName: validatedFields.data.UserName,
			Password: validatedFields.data.Password,
			MFACode: validatedFields.data.MFACode,
		}),
	});

	if (!res.ok) {
		return {
			message: res.statusText,
		};
	}

	const body: AuthenticateUserResponse = await res.json();

	const cookieStore = await cookies();

	if (!body.BearerToken || body.BearerToken === '') {
		return {
			message: 'Check Your Username/Password and try again',
		};
	}

	await cookieStore.set('token', body.BearerToken);

	return redirect('/dashboard');
}
