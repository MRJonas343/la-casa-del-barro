import type { QuestionFieldProps } from "@/interfaces";

export interface FormState {
	questionsState: QuestionFieldProps[];
	isFormLiked: boolean;
	shouldSendCopy: boolean;
	isSubmitting: boolean;
	comment: string;
}

export type FormAction =
	| { type: "SET_QUESTIONS_STATE"; payload: QuestionFieldProps[] }
	| { type: "SET_IS_FORM_LIKED"; payload: boolean }
	| { type: "SET_SHOULD_SEND_COPY"; payload: boolean }
	| { type: "SET_IS_SUBMITTING"; payload: boolean }
	| { type: "SET_COMMENT"; payload: string };

export const formReducer = (
	state: FormState,
	action: FormAction,
): FormState => {
	switch (action.type) {
		case "SET_QUESTIONS_STATE":
			return { ...state, questionsState: action.payload };
		case "SET_IS_FORM_LIKED":
			return { ...state, isFormLiked: action.payload };
		case "SET_SHOULD_SEND_COPY":
			return { ...state, shouldSendCopy: action.payload };
		case "SET_IS_SUBMITTING":
			return { ...state, isSubmitting: action.payload };
		case "SET_COMMENT":
			return { ...state, comment: action.payload };
		default:
			return state;
	}
};

export const formInitialState = (
	questions: QuestionFieldProps[],
): FormState => ({
	questionsState: questions,
	isFormLiked: false,
	shouldSendCopy: false,
	isSubmitting: false,
	comment: "",
});
