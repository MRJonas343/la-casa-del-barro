"use client";

import { CardsGrid, CloudTags, SearchInput } from "@/components";
import { debouncedSearch } from "../helpers/debounceSearch";
import { loadMoreCards } from "../services/loadMoreCards";
import { reducer, initializeState } from "../store/state";
import { useInView } from "react-intersection-observer";
import type { FormCardProps } from "@/interfaces";
import { Spinner } from "@nextui-org/react";
import { getLatestForms } from "@/services";
import { useReducer, useRef } from "react";

const MainPage = ({ cardsData }: { cardsData: FormCardProps[] }) => {
	const [state, dispatch] = useReducer(reducer, cardsData, initializeState);
	const { ref, inView } = useInView({ threshold: 0.5 });
	const pageRef = useRef(1);

	const loadMore = async () => {
		await loadMoreCards(state, dispatch, pageRef, getLatestForms);
	};

	if (inView && state.hasMore && state.fullTextSearch === "") loadMore();

	const handleInputChange = (value: string) => {
		dispatch({ type: "SET_FULL_TEXT_SEARCH", payload: value });
		debouncedSearch(value, dispatch, pageRef, getLatestForms);
	};

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
export default MainPage;
