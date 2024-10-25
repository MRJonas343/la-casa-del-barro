import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
	const session = await auth();

	if (!session) return redirect("/login");

	return <div>Results</div>;
};
export default page;
