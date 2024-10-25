import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getFormById, getFormResults } from "@/services";
import { FormResultsPage } from "../../components";

const page = async ({ params }: { params: { id: string } }) => {
	const session = await auth();

	if (!session) return redirect("/login");

	const form = await getFormById(Number.parseInt(params.id));

	if (!form) return redirect("/");

	if (form.author_id !== Number(session.user.id)) return redirect("/");

	const responses = await getFormResults(Number.parseInt(params.id));

	return <FormResultsPage data={responses} />;
};
export default page;
