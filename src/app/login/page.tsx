import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";
import { LoginForm } from "./components";
import { loginMetaData } from "@/meta";
import { NavBar } from "@/components";
import { auth } from "@/auth";

export const metadata = loginMetaData;

const page = async () => {
	const session = await auth();

	if (session) return redirect("/");

	const t = await getTranslations("auth");

	return (
		<main className="overflow-x-hidden min-h-screen">
			<NavBar />
			<h1 className="text-center mt-6 text-xl sm:text-2xl md:text-3xl font-semibold">
				{t("title")}
			</h1>
			<section className="flex w-full mx-auto justify-center mt-6">
				<LoginForm />
			</section>
		</main>
	);
};
export default page;
