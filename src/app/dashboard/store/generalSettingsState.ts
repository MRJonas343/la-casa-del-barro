import type { Selection } from "@nextui-org/react";
import type { UserType } from "@/interfaces";

interface State {
	isSubmitting: boolean;
	isFormPublic: boolean;
	topicsState: Selection;
	image: File | null;
	selectedUsers: UserType[];
	inputValue: string;
	users: UserType[];
	searchingBy: Selection;
}

export const initialState: State = {
	isSubmitting: false,
	isFormPublic: false,
	topicsState: new Set([]),
	image: null,
	selectedUsers: [],
	inputValue: "",
	users: [],
	searchingBy: new Set(["username"]),
};

export type Action =
	| { type: "SET_SUBMITTING"; payload: boolean }
	| { type: "SET_FORM_PUBLIC"; payload: boolean }
	| { type: "SET_TOPICS"; payload: Selection }
	| { type: "SET_IMAGE"; payload: File | null }
	| { type: "SET_SELECTED_USERS"; payload: UserType[] }
	| { type: "SET_INPUT_VALUE"; payload: string }
	| { type: "SET_USERS"; payload: UserType[] }
	| { type: "SET_SEARCHING_BY"; payload: Selection };

export const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "SET_SUBMITTING":
			return { ...state, isSubmitting: action.payload };
		case "SET_FORM_PUBLIC":
			return { ...state, isFormPublic: action.payload };
		case "SET_TOPICS":
			return { ...state, topicsState: action.payload };
		case "SET_IMAGE":
			return { ...state, image: action.payload };
		case "SET_SELECTED_USERS":
			return { ...state, selectedUsers: action.payload };
		case "SET_INPUT_VALUE":
			return { ...state, inputValue: action.payload };
		case "SET_USERS":
			return { ...state, users: action.payload };
		case "SET_SEARCHING_BY":
			return { ...state, searchingBy: action.payload };
		default:
			return state;
	}
};
