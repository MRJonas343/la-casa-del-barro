import { redirect } from "next/navigation";
import { Dashboard } from "./components";
import { NavBar } from "@/components";
import { auth } from "@/auth";

const page = async () => {
	const session = await auth();

	if (!session) return redirect("/login");

	return (
		<>
			<NavBar />
			<Dashboard />
		</>
	);
};
export default page;
