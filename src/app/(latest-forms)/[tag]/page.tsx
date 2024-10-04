export const revalidate = 60;

const Page = async ({ params }: { params: { tag: string } }) => {
	const data = await fetchData(params.tag);

	return <div>{params.tag} forms</div>;
};

export default Page;

async function fetchData(tag: string) {
	//TODO: Get the data form the DB
	return { tag };
}

export async function generateStaticParams() {
	const tags = [
		"education",
		"technology",
		"environment",
		"science",
		"literature",
		"health",
		"business",
		"finance",
		"maths",
		"history",
		"animals",
		"sports",
	];

	return tags.map((tag) => ({
		tag,
	}));
}
