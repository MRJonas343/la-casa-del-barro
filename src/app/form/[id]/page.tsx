import {
	checkPermission,
	getComments,
	getFormById,
	getFormQuestions,
} from "@/services";
import { isFormAlreadyFill } from "@/services/filledForms/isFormAlreadyFill";
import { FormComponent } from "../components/FormComponent";
import { redirect } from "next/navigation";
import { NavBar } from "@/components";
import { auth } from "@/auth";

export default async function FormPage(props: {
	params: Promise<{ id: string }>;
}) {
	const params = await props.params;
	const formId = Number.parseInt(params.id);
	const session = await auth();

	let isReadOnly = true;

	const [questions, formGeneralData, comments] = await Promise.all([
		getFormQuestions(formId),
		getFormById(formId),
		getComments(formId),
	]);

	if (!formGeneralData) {
		return <div>Form not found</div>;
	}

	if (!session) {
		// If no session, user is in readonly mode
		return (
			<>
				<NavBar />
				<FormComponent
					isReadOnly={true}
					questions={questions}
					formGeneralData={formGeneralData}
					comments={comments}
				/>
			</>
		);
	}

	// Check if the user is the form author
	const isAuthor =
		String(session.user.id) === String(formGeneralData.author_id);

	if (isAuthor) {
		isReadOnly = true;
	} else {
		// Check if the form has already been filled by the user
		const isFormFilled = await isFormAlreadyFill(
			Number(session.user.id),
			formId,
		);
		if (isFormFilled) {
			return redirect(`/filled-form/${formId}/${session.user.id}`);
		}

		// Check if the user has permission to fill the form if it's public
		const hasPermission = await checkPermission(
			formId,
			Number(session.user.id),
		);
		isReadOnly = !hasPermission;
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
