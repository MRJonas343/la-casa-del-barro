import { CloudTags, NavBar, SearchInput } from "@/components";
import { mainPageMetaData } from "@/meta";

export const metadata = mainPageMetaData;

export default function MainPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="overflow-x-hidden min-h-screen">
			<NavBar />
			<div className="w-full flex lg:justify-end lg:flex mt-2 lg:max-w-[1280px] lg:mx-auto">
				<SearchInput />
			</div>
			<CloudTags />
			{children}
		</main>
	);
}
