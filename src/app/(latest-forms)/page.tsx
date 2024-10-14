import { CardsGrid } from "@/components";
import { getLatestForms } from "@/services/forms/getLatestForms";

const page = async () => {
	const initialForms = await getLatestForms(1, 10);

	return (
		<div className="mt-5 w-screen flex justify-center">
			<CardsGrid cardsData={initialForms} />
		</div>
	);
};
export default page;
