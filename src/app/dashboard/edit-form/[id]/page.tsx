import EditFormComponent from "../components/EditFormComponent";
import { NavBar } from "@/components";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { checkFormOwnership } from "@/services";
import { getFormQuestions, getFormToEdit } from "@/services";

export default async function page({ params }: { params: { id: string } }) {
	const session = await auth();

	if (!session) return redirect("/login");

	//@ts-ignore
	const role = session.user?.role;

	if (role === "user") {
		const isTheAhtor = await checkFormOwnership(
			Number.parseInt(params.id),
			Number.parseInt(session.user?.id ?? ""),
		);

		if (!isTheAhtor) return redirect("/");
	}

	const [formGeneralData, questions] = await Promise.all([
		getFormToEdit(Number.parseInt(params.id)),
		getFormQuestions(Number.parseInt(params.id)),
	]);

	if (!formGeneralData) return redirect("/dashboard");

	return (
		<>
			<NavBar />
			<EditFormComponent
				formId={params.id}
				data={{ formGeneralData, questions }}
			/>
		</>
	);
}
