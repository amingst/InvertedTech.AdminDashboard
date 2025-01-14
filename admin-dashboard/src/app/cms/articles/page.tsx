import Link from 'next/link';

export default function CMSSettingsArticlePage() {
	return (
		<main className='text-center'>
			<h1>Articles</h1>

			<div className='mt-5'>
				<Link href={'/cms/articles/new'}>New Article</Link>
			</div>
		</main>
	);
}
