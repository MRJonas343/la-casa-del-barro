import CloudTags from "@/components/CloudTags";
import NavBar from "@/components/NavBar";
import SearchInput from "@/components/SearchInput";

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
