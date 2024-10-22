import type { Action, initialState } from "../store/state";
import type { FormCardProps } from "@/interfaces";
import type { MutableRefObject } from "react";

type FetchDataFunction = (
	page: number,
	limit: number,
	tag?: string,
) => Promise<{ hasMore: boolean; forms: FormCardProps[] }>;

export const loadMoreCards = async (
	state: typeof initialState,
	dispatch: (value: Action) => void,
	pageRef: MutableRefObject<number>,
	fetchData: FetchDataFunction,
	tag?: string,
) => {
	if (state.loading || !state.hasMore) return;

	dispatch({ type: "SET_LOADING", payload: true });
	pageRef.current += 1;

	const { hasMore: newHasMore, forms: newForms } = tag
		? await fetchData(1, 10, tag)
		: await fetchData(1, 10);

	dispatch({ type: "SET_CARDS", payload: newForms });
	dispatch({ type: "SET_HAS_MORE", payload: newHasMore });
	dispatch({ type: "SET_LOADING", payload: false });
};
