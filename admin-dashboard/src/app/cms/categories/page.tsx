import Link from 'next/link';

export default async function CMSSettingsCategoryPage() {
	return <Link href={'/cms/categories/new'}>Add New Category</Link>;
}
