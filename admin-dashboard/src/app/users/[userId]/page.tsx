import { UserRecord } from '@/types/auth';

type GetUserResponse = {
	Record: UserRecord;
};

async function getUser(userId: string): Promise<UserRecord | undefined> {
	'use server';
	const url = `${process.env.API_URL}/auth/admin/user/${userId}`;

	const res = await fetch(url, {
		method: 'GET',
	});

	if (!res.ok) {
		return;
	}

	const body: GetUserResponse = await res.json();
	return body.Record;
}

type UserPageParams = Promise<{
	userId?: string;
}>;

// FIXME: Fix Params
export default async function UserPage(props: UserPageParams) {
	const { userId } = await props;

	if (!userId) {
		throw new Error('User Id Not Found');
	}

	const user = await getUser(userId);

	if (!user) {
		throw new Error('User Not Found');
	}

	return <h1>user</h1>;
}
