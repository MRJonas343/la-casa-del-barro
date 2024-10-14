import { getLatestForms } from "@/services/forms/getLatestForms";
import MainPage from "./components/MainPage";

const page = async () => {
	const initialForms = await getLatestForms(1, 10);

	return <MainPage cardsData={initialForms} />;
};
export default page;
