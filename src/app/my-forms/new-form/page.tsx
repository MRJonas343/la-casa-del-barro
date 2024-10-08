import { NavBar, SearchInput } from "@/components";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { CreateNewForm } from "../components/CreateNewForm";

const page = async () => {
	const session = await auth();

	if (!session) return redirect("/login");
	return (
		<>
			<NavBar />
			<CreateNewForm />
		</>
	);
};

export default page;
