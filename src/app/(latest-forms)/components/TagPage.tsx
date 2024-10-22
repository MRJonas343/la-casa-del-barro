"use client";

import { CardsGrid, CloudTags, SearchInput } from "@/components";
import { debouncedSearch } from "../helpers/debounceSearch";
import { loadMoreCards } from "../services/loadMoreCards";
import { initializeState, reducer } from "../store/state";
import { useInView } from "react-intersection-observer";
import type { FormCardProps } from "@/interfaces";
import { Spinner } from "@nextui-org/react";
import { useReducer, useRef } from "react";
import { getFormsByTag } from "@/services";

export const TagPage = ({
	cardsData,
	tag,
}: { cardsData: FormCardProps[]; tag: string }) => {
	const [state, dispatch] = useReducer(reducer, cardsData, initializeState);
	const { ref, inView } = useInView({ threshold: 0.5 });
	const pageRef = useRef(1);

	const loadMore = async () => {
		await loadMoreCards(state, dispatch, pageRef, getFormsByTag, tag);
	};

	const handleInputChange = (value: string) => {
		dispatch({ type: "SET_FULL_TEXT_SEARCH", payload: value });
		debouncedSearch(value, dispatch, pageRef, getFormsByTag, tag);
	};

	if (inView && state.hasMore && state.fullTextSearch === "") loadMore();

	return (
		<>
			<div className="w-full flex lg:justify-end lg:flex mt-2 lg:max-w-[1280px] lg:mx-auto">
				<SearchInput
					value={state.fullTextSearch}
					setValue={handleInputChange}
				/>
			</div>
			<CloudTags />
			<div className="mt-5 w-screen flex justify-center">
				<CardsGrid cardsData={state.cards} />
			</div>
			<div ref={ref} className="h-10" />
			<div className="w-full flex justify-center">
				{state.loading && <Spinner size="lg" />}
			</div>
		</>
	);
};
