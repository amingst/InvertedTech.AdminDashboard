'use client';
import { useRouter } from 'next/navigation';
import { TableRow, TableCell } from '../ui/table';
type UserListItemProps = {
	userId: string;
	username: string;
	createdOnUTC: string;
	roles: string[];
	modifiedOnUTC?: string;
	disabledOnUTC?: string;
};
import { parseISO } from 'date-fns';

// TODO: Rename to table item
export function UserListItem(props: UserListItemProps) {
	const router = useRouter();

	function handleClick() {
		const url = `/users/${props.userId}`;
		console.log(url);
		// TODO: Add Routing;
	}
	return (
		<TableRow
			className='hover:cursor-pointer select-none '
			onClick={handleClick}
		>
			<TableCell>{props.username}</TableCell>
			<TableCell>
				{parseISO(props.createdOnUTC).toLocaleDateString()}
			</TableCell>
			<TableCell>
				{parseISO(
					props.modifiedOnUTC || props.createdOnUTC
				).toLocaleDateString()}
			</TableCell>
			<TableCell>
				{props.roles.length > 0 ? (
					props.roles.map((role, i) => (
						<p
							key={`${role}_${i}`}
							className='truncate inline-block overflow-ellipsis '
						>
							{role + ','}
						</p>
					))
				) : (
					<p>none</p>
				)}
			</TableCell>
		</TableRow>
	);
}
