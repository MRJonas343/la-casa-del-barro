import type { Dispatch, SetStateAction } from "react";
import type { NewQuestion } from "@/interfaces";

export const changeMultipleQuestionInputs = (
	id: string,
	options: string[],
	setQuestionsState: Dispatch<SetStateAction<NewQuestion[]>>,
) => {
	setQuestionsState((prevState) =>
		prevState.map((question) =>
			question.id === id ? { ...question, options } : question,
		),
	);
};
