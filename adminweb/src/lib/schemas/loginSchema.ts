import z from 'zod';

export const loginSchema = z.object({
	UserName: z.string().nonempty('Username is required'),
	Password: z.string().nonempty('Password is required'),
	MFACode: z.string().optional().default(''),
});
