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
		</main>
	);
}
