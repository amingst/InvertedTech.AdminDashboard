import { redirect, RedirectType } from 'next/navigation';

export const handleResponse = async (status: number, url: string = '/') => {
	switch (status) {
		case 200:
			redirect(url, RedirectType.replace);
		default:
			// TODO: Add break case
			break;
	}
};
