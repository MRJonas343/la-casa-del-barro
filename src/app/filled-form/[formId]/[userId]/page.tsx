import { FilledForm } from "../../components/FilledForm";
import { NavBar } from "@/components";
import { getFilledForm } from "@/services";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async ({
	params,
}: { params: { formId: string; userId: string } }) => {
	const session = await auth();

	if (!session) return redirect("/login");

	const form = await getFilledForm(
		Number.parseInt(params.formId),
		Number.parseInt(params.userId),
	);

	//@ts-ignore
	if (session.user?.role !== "admin") {
		if (form.form?.author_id !== session.user?.id) {
			if (session.user?.id !== params.userId) return redirect("/");
		}
	}

	return (
		<>
			<NavBar />
			<FilledForm data={form} />
		</>
	);
};

export default page;
