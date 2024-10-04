import { cardsDataExamples } from "@/constants/CardsDataExample";
import CardsGrid from "@/components/CardsGrid";

const page = () => {
	return (
		<div className="mt-5 w-screen flex justify-center">
			<CardsGrid cardsData={cardsDataExamples} />
		</div>
	);
};
export default page;
