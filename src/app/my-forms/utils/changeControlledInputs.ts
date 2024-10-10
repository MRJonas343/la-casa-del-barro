import type { Dispatch, SetStateAction } from "react";
import type { Question } from "@/interfaces";

export const changeControlledInputs = (
	id: string,
	key: string,
	value: string | boolean,
	setQuestionsState: Dispatch<SetStateAction<Question[]>>,
) => {
	setQuestionsState((prevState) =>
		prevState.map((question) =>
			question.id === id ? { ...question, [key]: value } : question,
		),
	);
};
