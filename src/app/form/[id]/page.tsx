import { isFormAlreadyFill } from "@/services/filledForms/isFormAlreadyFill";
import {
	checkPermission,
	getComments,
	getFormById,
	getFormQuestions,
} from "@/services";
import { FormComponent } from "../components/FormComponent";
import { NavBar } from "@/components";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function FormPage(props: {
	params: Promise<{ id: string }>;
}) {
	const params = await props.params;
	const formId = Number.parseInt(params.id);
	const session = await auth();

	let isReadOnly = false;

	const [questions, formGeneralData, comments] = await Promise.all([
		getFormQuestions(formId),
		getFormById(formId),
		getComments(formId),
	]);

	if (!formGeneralData) return <div>Form not found</div>;

	if (!session) isReadOnly = true;

	if (String(session?.user?.id) === String(formGeneralData.author_id)) {
		isReadOnly = true;
	}

	if (session) {
		const isFormFilled = await isFormAlreadyFill(
			Number.parseInt(session?.user?.id ?? ""),
			formId,
		);
		if (isFormFilled) redirect(`/filled-form/${formId}/${session?.user?.id}`);
	}

	if (!formGeneralData.isPublic) {
		const hasPermission = await checkPermission(
			formId,
			Number.parseInt(session?.user?.id ?? ""),
		);

		if (!hasPermission) isReadOnly = true;
	}

	return (
		<>
			<NavBar />
			<FormComponent
				isReadOnly={isReadOnly}
				questions={questions}
				formGeneralData={formGeneralData}
				comments={comments}
			/>
		</>
	);
}
