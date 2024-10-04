import type { PageProps } from "./interfaces/pageProps";

const page = ({ params }: PageProps) => {
	return <div>{params.tag} forms</div>;
};
export default page;
