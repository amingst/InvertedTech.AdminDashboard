import { NewCategoryForm } from '@/components/forms/new-category';
import NewEntityPage from '@/components/pages/new-entity';

export default function NewCategoryPage() {
	return (
		<NewEntityPage
			FormComponent={NewCategoryForm}
			apiUrl='/settings/category/create'
		/>
	);
}
