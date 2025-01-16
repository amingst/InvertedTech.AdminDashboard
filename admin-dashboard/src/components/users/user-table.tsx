'use server';
import { UserRecord } from '@/types/auth';
import { ScrollArea } from '../ui/scroll-area';
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '../ui/table';
import { UserListItem } from './user-table-item';
import { UserTablePaginator } from './user-table-paginator';

type GetUsersResponse = {
	Records: UserRecord[];
	PageOffsetStart: number;
	PageOffsetEnd: number;
	PageTotalItems: number;
};

export async function getUsers(): Promise<GetUsersResponse> {
	const url = `${process.env.API_URL}/auth/admin/user`;

	const res = await fetch(url, {
		method: 'GET',
	});

	if (!res.ok) {
		return {
			Records: [],
			PageOffsetStart: 0,
			PageOffsetEnd: 0,
			PageTotalItems: 0,
		};
	}

	const body: GetUsersResponse = await res.json();
	return body;
}

// TODO: Rename to Table
export default async function UserList() {
	// const users = await getUsers();
	const users: GetUsersResponse = {
		Records: [
			{
				Public: {
					UserID: 'user123',
					CreatedOnUTC: '2025-01-01T12:00:00Z',
					ModifiedOnUTC: '2025-01-15T12:00:00Z',
					DisabledOnUTC: '',
					Data: {
						UserName: 'john_doe',
						DisplayName: 'John Doe',
						Identities: ['email', 'social_media'],
						Bio: 'Software engineer with a passion for clean code.',
						ProfileImagePNG:
							'https://example.com/images/john_doe.png',
					},
				},
				Private: {
					Roles: ['user', 'developer'],
					CreatedBy: 'admin',
					ModifiedBy: 'admin',
					DisabledBy: '',
					Data: {
						Emails: ['john.doe@example.com'],
						FirstName: 'John',
						LastName: 'Doe',
						OldUserID: 'old_user123',
						MailingAddressLine1: '123 Main St',
						MailingAddressLine2: 'Apt 4B',
						MailingAddressCity: 'Springfield',
						MailingAddressState: 'IL',
						MailingAddressPostalCode: '62701',
						MailingAddressCountryCode: 'US',
					},
				},
			},
			{
				Public: {
					UserID: 'user456',
					CreatedOnUTC: '2025-01-05T15:30:00Z',
					ModifiedOnUTC: '2025-01-16T08:45:00Z',
					DisabledOnUTC: '',
					Data: {
						UserName: 'jane_smith',
						DisplayName: 'Jane Smith',
						Identities: ['email', 'social_media'],
						Bio: 'Digital marketing expert who loves content creation.',
						ProfileImagePNG:
							'https://example.com/images/jane_smith.png',
					},
				},
				Private: {
					Roles: [],
					CreatedBy: 'admin',
					ModifiedBy: 'admin',
					DisabledBy: '',
					Data: {
						Emails: ['jane.smith@example.com'],
						FirstName: 'Jane',
						LastName: 'Smith',
						OldUserID: 'old_user456',
						MailingAddressLine1: '456 Oak St',
						MailingAddressLine2: 'Suite 3A',
						MailingAddressCity: 'Madison',
						MailingAddressState: 'WI',
						MailingAddressPostalCode: '53703',
						MailingAddressCountryCode: 'US',
					},
				},
			},
			{
				Public: {
					UserID: 'user789',
					CreatedOnUTC: '2025-01-10T09:20:00Z',
					ModifiedOnUTC: '2025-01-16T09:00:00Z',
					DisabledOnUTC: '',
					Data: {
						UserName: 'alice_williams',
						DisplayName: 'Alice Williams',
						Identities: ['email', 'social_media'],
						Bio: 'Creative designer and art enthusiast.',
						ProfileImagePNG:
							'https://example.com/images/alice_williams.png',
					},
				},
				Private: {
					Roles: ['user', 'designer'],
					CreatedBy: 'admin',
					ModifiedBy: 'admin',
					DisabledBy: '',
					Data: {
						Emails: ['alice.williams@example.com'],
						FirstName: 'Alice',
						LastName: 'Williams',
						OldUserID: 'old_user789',
						MailingAddressLine1: '789 Pine St',
						MailingAddressLine2: 'Floor 2',
						MailingAddressCity: 'Portland',
						MailingAddressState: 'OR',
						MailingAddressPostalCode: '97205',
						MailingAddressCountryCode: 'US',
					},
				},
			},
		],
		PageOffsetStart: 0,
		PageOffsetEnd: 3,
		PageTotalItems: 3,
	};
	return (
		<Table className='w-[75vw] max-w-[950px] rounded-md border p-4'>
			<TableHeader className='select-none'>
				<TableRow>
					<TableHead>Username</TableHead>
					<TableHead>Created On</TableHead>
					<TableHead>Modified On</TableHead>
					<TableHead>Roles</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{users.Records.map((user) => (
					<UserListItem
						key={user.Public.UserID}
						userId={user.Public.UserID}
						username={user.Public.Data.UserName}
						createdOnUTC={user.Public.CreatedOnUTC}
						modifiedOnUTC={user.Public.ModifiedOnUTC}
						roles={user.Private.Roles}
					/>
				))}
			</TableBody>
			<TableFooter className='select-none'>
				<TableRow>
					<TableCell colSpan={1}>
						Viewing: {users.PageOffsetStart} to{' '}
						{users.PageOffsetEnd}
					</TableCell>
					<TableCell colSpan={2}>
						<UserTablePaginator />
					</TableCell>
					<TableCell colSpan={1} className='text-right'>
						Total Results: {users.PageTotalItems}
					</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	);
}
