import { CardsGrid } from "@/components";
import { cardsDataExamples } from "@/constants";

//The layout component will be the parent component
//TODO : Thanks to your past you, he will give you a gift
//Just make the page component receive the parent component
const page = () => {
	return (
		<div className="mt-5 w-screen flex justify-center">
			<CardsGrid cardsData={cardsDataExamples} />
		</div>
	);
};
export default page;
