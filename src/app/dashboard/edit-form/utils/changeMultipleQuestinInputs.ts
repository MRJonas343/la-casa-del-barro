import type { Dispatch, SetStateAction } from "react";
import type { Question } from "@/interfaces/formDataToUpdate";

export const changeMultipleQuestionInputs = (
	id: string,
	options: string[],
	setQuestionsState: Dispatch<SetStateAction<Question[]>>,
) => {
	setQuestionsState((prevState) =>
		prevState.map((question) =>
			question.id === id ? { ...question, options } : question,
		),
	);
};
