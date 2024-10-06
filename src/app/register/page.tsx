import NavBar from "@/components/NavBar";
import RegisterForm from "./components/RegisterForm";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

const page = async () => {
	const session = await auth();

	if (session) return redirect("/");

	return (
		<main className="overflow-x-hidden min-h-screen">
			<NavBar />
			<h1 className="text-center mt-6 text-xl sm:text-2xl md:text-3xl font-semibold">
				Join Form Master 💖
			</h1>
			<section className="flex w-full mx-auto justify-center mt-6">
				<RegisterForm />
			</section>
		</main>
	);
};
export default page;
