import { TotalUsersChart } from '@/components/users/total-users-chart';
import UserList from '@/components/users/user-table';
import { Suspense } from 'react';

export default async function UsersPage() {
	return (
		<main>
			<section id='users'>
				<div className='justify-center justify-self-center'>
					<Suspense fallback={<p>loading users</p>}>
						<UserList />
					</Suspense>
				</div>
			</section>
			<section id='total-users-chart'>
				<TotalUsersChart numUsers={20} />
			</section>
		</main>
	);
}
