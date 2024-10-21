import EditFormComponent from "../components/EditFormComponent";
import { NavBar } from "@/components";

export default function page({ params }: { params: { id: string } }) {
	return (
		<>
			<NavBar />
			<EditFormComponent />
		</>
	);
}
