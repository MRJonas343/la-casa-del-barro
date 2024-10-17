"use client";

import { getFormsByTag, getFormsWithFullTextSearch } from "@/services";
import { CardsGrid, CloudTags, SearchInput } from "@/components";
import type { FormCardProps } from "@/interfaces";
import { useInView } from "react-intersection-observer";
import { Spinner } from "@nextui-org/react";
import { useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

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

	const debouncedSearch = useDebouncedCallback(async (value: string) => {
		const result = await getFormsWithFullTextSearch(value);

		if (result.length === 0) {
			pageRef.current = 1;
			const { forms } = await getFormsByTag(tag, 1, 10);
			setCards(forms);
			setHasMore(true);
			return;
		}
		setCards(result);
		setHasMore(true);
	}, 500);

	const handleInputChange = (value: string) => {
		setFullTextSearch(value);
		debouncedSearch(value);
	};

	if (inView && hasMore && fullTextSearch === "") loadMore();

	return (
		<>
			<div className="w-full flex lg:justify-end lg:flex mt-2 lg:max-w-[1280px] lg:mx-auto">
				<SearchInput value={fullTextSearch} setValue={handleInputChange} />
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
