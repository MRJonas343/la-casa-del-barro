import { PopularFormsTable } from "./components";

const page = async () => {
	//const popularForms = await getPopularForms();
	//TODO : Fetch the popular forms from the database in the server an pass it to the table component
	return (
		<div className="flex h-[85vh] items-center">
			<PopularFormsTable />
		</div>
	);
};
export default page;
