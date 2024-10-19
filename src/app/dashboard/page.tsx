import { getUserForms } from "@/services";
import { redirect } from "next/navigation";
import { Dashboard } from "./components";
import { NavBar } from "@/components";
import { auth } from "@/auth";

const page = async () => {
	const session = await auth();

	if (!session) return redirect("/login");

	const userForms = await getUserForms(
		Number.parseInt(session?.user?.id ?? ""),
	);

	return (
		<>
			<NavBar />
			<Dashboard userForms={userForms} />
		</>
	);
};
export default page;
