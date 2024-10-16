import { getFormsByTag } from "@/services";
import { TagPage } from "../components/TagPage";

const Page = async ({ params }: { params: { tag: string } }) => {
	const { tag } = params;

	const { forms } = await getFormsByTag(tag, 1, 10);

	return (
		<div>
			<TagPage cardsData={forms} tag={tag} />
		</div>
	);
};

export default Page;
