import { getFormsByTag } from "@/services";
import MainPage from "../components/MainPage";

const Page = async ({ params }: { params: { tag: string } }) => {
	const { tag } = params;

	const forms = await getFormsByTag(tag, 1, 10);

	return (
		<div>
			<MainPage cardsData={forms} />
		</div>
	);
};

export default Page;
