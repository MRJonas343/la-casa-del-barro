import { NavBar } from "@/components";
import { AdminTable } from "../components/AdminTable";
import { getAllUsers } from "@/services";

const page = async () => {
	const users = await getAllUsers();

	return (
		<>
			<NavBar />
			<AdminTable data={users} />
		</>
	);
};
export default page;
