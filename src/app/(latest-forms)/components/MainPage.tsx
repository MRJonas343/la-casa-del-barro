"use client";

import { getLatestForms, getFormsByTag } from "@/services";
import { CardsGrid, CloudTags, SearchInput } from "@/components";
import type { FormCardProps } from "@/interfaces";
import { useInView } from "react-intersection-observer";
import { Spinner } from "@nextui-org/react";
import { useRef, useState } from "react";
export interface CardsGridProps {
	cardsData: FormCardProps[];
}

const MainPage = ({ cardsData }: CardsGridProps) => {
	const [cards, setCards] = useState<FormCardProps[]>(cardsData);
	const [fullTextSearch, setFullTextSearch] = useState("");
	const [loading, setLoading] = useState(false);
	const pageRef = useRef(1);

	const { ref, inView } = useInView({ threshold: 0.5 });

	const loadMore = async () => {
		if (loading) return;
		setLoading(true);
		pageRef.current += 1;
		const newForms = await getLatestForms(pageRef.current, 10);
		setCards((prev) => [...prev, ...newForms]);
		setLoading(false);
	};

	if (inView) loadMore();

	const changeInFullTextSearch = (value: string) => {
		console.log(value);
		setFullTextSearch(value);
	};

	return (
		<>
			<div className="w-full flex lg:justify-end lg:flex mt-2 lg:max-w-[1280px] lg:mx-auto">
				<SearchInput
					value={fullTextSearch}
					setValue={(value) => changeInFullTextSearch(value)}
				/>
			</div>
			<CloudTags />
			<div className="mt-5 w-screen flex justify-center">
				<CardsGrid cardsData={cards} />
			</div>
			<div ref={ref} className="h-10" />
			<div className="w-full flex justify-center">
				{loading && <Spinner size="lg" />}
			</div>
		</>
	);
};
export default MainPage;
