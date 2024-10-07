import { NavBar, SearchInput } from "@/components";
import { MdEdit, MdDelete } from "react-icons/md";
import { DashboardTabs, MyFormsTable } from "./components";
import { redirect } from "next/navigation";
import { Button } from "@nextui-org/react";
import { auth } from "@/auth";

const page = async () => {
	const session = await auth();

	if (!session) return redirect("/login");

	return (
		<>
			<NavBar />
			<div className="w-full flex lg:justify-end lg:flex mt-4 lg:max-w-[1280px] lg:mx-auto">
				<SearchInput />
			</div>
			<div className="w-full flex flex-col lg:flex-row lg:max-w-[1280px] lg:mx-auto px-5">
				<DashboardTabs />
				<div className="gap-3 w-full flex lg:justify-end mt-6">
					<Button radius="sm" variant="shadow" color="primary">
						New Form
					</Button>
					<Button variant="bordered" radius="sm" color="primary">
						See Answers
					</Button>
					<Button variant="bordered" color="primary" radius="sm" isIconOnly>
						<MdEdit size={20} />
					</Button>
					<Button variant="bordered" color="danger" radius="sm" isIconOnly>
						<MdDelete size={20} />
					</Button>
				</div>
			</div>
			<div className="justify-center w-full flex mt-5 sm:mt-10">
				<MyFormsTable />
			</div>
		</>
	);
};
export default page;
