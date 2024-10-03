import NavBar from "@/components/NavBar";
import CloudTags from "@/components/CloudTags";
import { cardsDataExamples } from "@/constants/CardsDataExample";
import CardsGrid from "@/components/CardsGrid";

const page = () => {
	return (
		<main className="overflow-x-hidden min-h-screen">
			<NavBar />
			<CloudTags />
			<div className="mt-5 w-screen flex justify-center">
				<CardsGrid cardsData={cardsDataExamples} />
			</div>
		</main>
	);
};
export default page;
