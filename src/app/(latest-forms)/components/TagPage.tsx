"use client";

import { getFormsByTag } from "@/services";
import { CardsGrid, CloudTags, SearchInput } from "@/components";
import type { FormCardProps } from "@/interfaces";
import { useInView } from "react-intersection-observer";
import { Spinner } from "@nextui-org/react";
import { useRef, useState } from "react";

export const TagPage = ({
	cardsData,
	tag,
}: { cardsData: FormCardProps[]; tag: string }) => {
	const [cards, setCards] = useState<FormCardProps[]>(cardsData);
	const [fullTextSearch, setFullTextSearch] = useState("");
	const [loading, setLoading] = useState(false);
	const [hasMore, setHasMore] = useState(true);
	const pageRef = useRef(1);

	const { ref, inView } = useInView({ threshold: 0.5 });

	const loadMore = async () => {
		if (loading || !hasMore) return;
		setLoading(true);
		pageRef.current += 1;
		const { hasMore: newHasMore, forms: newForms } = await getFormsByTag(
			tag,
			pageRef.current,
			10,
		);
		setCards((prev) => [...prev, ...newForms]);
		setHasMore(newHasMore);
		setLoading(false);
	};

	if (inView && hasMore) loadMore();

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
