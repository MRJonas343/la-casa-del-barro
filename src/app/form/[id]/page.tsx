import { FormComponent } from "../components/FormComponent";
import { getFormById, getFormQuestions } from "@/services";
import { NavBar } from "@/components";

export default async function FormPage({ params }: { params: { id: string } }) {
	const questions = await getFormQuestions(Number.parseInt(params.id));
	const formGeneralData = await getFormById(Number.parseInt(params.id));

	if (!formGeneralData) return <div>Form not found</div>;

	return (
		<>
			<NavBar />
			<FormComponent questions={questions} formGeneralData={formGeneralData} />
		</>
	);
}
