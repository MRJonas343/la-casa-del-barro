import { useDebouncedCallback } from "use-debounce";
import type { Action } from "../store/state";
import type { MutableRefObject } from "react";
import type { FormCardProps } from "@/interfaces";
import { getFormsWithFullTextSearch } from "@/services";

type ResetDataFunction = (
	page: number,
	limit: number,
	tag?: string,
) => Promise<{ hasMore: boolean; forms: FormCardProps[] }>;

export const debouncedSearch = useDebouncedCallback(
	async (
		value: string,
		dispatch: (value: Action) => void,
		pageRef: MutableRefObject<number>,
		resetDataFunction: ResetDataFunction,
		tag?: string,
	) => {
		const result = await getFormsWithFullTextSearch(value);

		if (result.length === 0) {
			pageRef.current = 1;

			const { forms } = tag
				? await resetDataFunction(1, 10, tag)
				: await resetDataFunction(1, 10);

			dispatch({ type: "SET_CARDS", payload: forms });
			dispatch({ type: "SET_HAS_MORE", payload: true });
			return;
		}

		dispatch({ type: "SET_HAS_MORE", payload: true });
		dispatch({ type: "SET_CARDS", payload: result });
	},
	500,
);
