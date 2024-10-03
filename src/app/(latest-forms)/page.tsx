import NavBar from "@/components/NavBar";
import CloudTags from "@/components/CloudTags";
import { cardsDataExamples } from "@/constants/CardsDataExample";
import CardsGrid from "@/components/CardsGrid";
import { Input } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";

const page = () => {
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
			<div className="mt-5 w-screen flex justify-center">
				<CardsGrid cardsData={cardsDataExamples} />
			</div>
		</main>
	);
};
export default page;
