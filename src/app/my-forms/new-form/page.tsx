import { NavBar } from "@/components";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { NewForm } from "../components";

const page = async () => {
	const session = await auth();

	//if (!session) return redirect("/login");
	return (
		<>
			<NavBar />
			<NewForm />
		</>
	);
};

export default page;
