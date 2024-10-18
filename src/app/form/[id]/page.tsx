import { FormComponent } from "../components/FormComponent";
import { getComments, getFormById, getFormQuestions } from "@/services";
import { NavBar } from "@/components";

export default async function FormPage({ params }: { params: { id: string } }) {
	const formId = Number.parseInt(params.id);

	const [questions, formGeneralData, comments] = await Promise.all([
		getFormQuestions(formId),
		getFormById(formId),
		getComments(formId),
	]);

	if (!formGeneralData) return <div>Form not found</div>;

	return (
		<>
			<NavBar />
			<FormComponent
				questions={questions}
				formGeneralData={formGeneralData}
				comments={comments}
			/>
		</>
	);
}
