import type { Dispatch, SetStateAction } from "react";
import type { NewQuestion } from "@/interfaces";

export const changeControlledInputs = (
	id: string,
	key: string,
	value: string | boolean,
	setQuestionsState: Dispatch<SetStateAction<NewQuestion[]>>,
) => {
	setQuestionsState((prevState) =>
		prevState.map((question) =>
			question.id === id ? { ...question, [key]: value } : question,
		),
	);
};
