import type { Question } from "@/interfaces/formDataToUpdate";
import type { Dispatch, SetStateAction } from "react";

export const changeControlledInputs = (
	id: string,
	key: string,
	value: string | boolean,
	setQuestionsState: Dispatch<SetStateAction<Question[]>>,
) => {
	const adjustedKey = key === "questionName" ? "question" : key;

	setQuestionsState((prevState) =>
		prevState.map((question) =>
			question.id === id ? { ...question, [adjustedKey]: value } : question,
		),
	);
};
