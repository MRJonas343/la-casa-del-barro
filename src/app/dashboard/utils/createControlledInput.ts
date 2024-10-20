import type { Dispatch, SetStateAction } from "react";
import type { NewQuestion, QuestionType } from "@/interfaces";
import { v4 as uuid } from "uuid";

export const createControlledInput = (
	questionsState: NewQuestion[],
	setQuestionsState: Dispatch<SetStateAction<NewQuestion[]>>,
) => {
	const newQuestion: NewQuestion = {
		id: uuid(),
		questionName: "",
		questionType: "" as QuestionType,
		description: "",
		options: [],
		displayInTable: false,
	};
	setQuestionsState([...questionsState, newQuestion]);
};
