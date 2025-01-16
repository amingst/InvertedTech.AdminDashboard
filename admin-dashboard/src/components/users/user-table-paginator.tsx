'use client';

import {
	Pagination,
	PaginationNext,
	PaginationPrevious,
} from '../ui/pagination';

type UserTablePaginatorProps = {};

export function UserTablePaginator({}: UserTablePaginatorProps) {
	return (
		<Pagination>
			<PaginationPrevious href={'#'} />
			<PaginationNext href={'#'} />
		</Pagination>
	);
}
