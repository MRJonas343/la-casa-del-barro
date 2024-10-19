import { FilledForm } from "../../components/FilledForm";
import { NavBar } from "@/components";
import { getFilledForm } from "@/services";

const page = async ({
	params,
}: { params: { formId: string; userId: string } }) => {
	const form = await getFilledForm(
		Number.parseInt(params.formId),
		Number.parseInt(params.userId),
	);

	return (
		<>
			<NavBar />
			<FilledForm data={form} />
		</>
	);
};

export default page;
