import { getFormsByTag } from "@/services";
import { TagPage } from "../components/TagPage";

const Page = async ({ params }: { params: { tag: string } }) => {
	const { tag } = params;

	const { forms } = await getFormsByTag(1, 10, tag);

	return (
		<div>
			<TagPage cardsData={forms} tag={tag} />
		</div>
	);
};

export default Page;
