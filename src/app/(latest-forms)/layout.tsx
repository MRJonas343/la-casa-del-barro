import CloudTags from "@/components/CloudTags";
import NavBar from "@/components/NavBar";
import { Input } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";

export default function MainPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="overflow-x-hidden min-h-screen">
			<NavBar />
			<div className="w-full flex lg:justify-end lg:flex mt-2 lg:max-w-[1280px] lg:mx-auto">
				<Input
					radius="sm"
					endContent={<FaSearch />}
					placeholder="Search Forms"
					className="mx-5 lg:w-80"
					variant="bordered"
				/>
			</div>
			<CloudTags />
			{children}
		</main>
	);
}
