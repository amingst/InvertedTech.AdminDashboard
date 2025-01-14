import { PublicCommentsSettingsForm } from '@/components/forms/comments-public';
import NewEntityPage from '@/components/pages/new-entity';

export default function CommentsSettingsPage() {
	return (
		<div className='space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8'>
			<NewEntityPage
				FormComponent={PublicCommentsSettingsForm}
				apiUrl='/settings/comments/public'
			/>
			<NewEntityPage
				FormComponent={PublicCommentsSettingsForm}
				apiUrl='/settings/comments/public'
			/>
		</div>
	);
}
