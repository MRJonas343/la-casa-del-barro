import type { Dispatch, SetStateAction } from "react";
import type { QuestionType } from "@/interfaces";
import { v4 as uuid } from "uuid";
import type { Question } from "@/interfaces/formDataToUpdate";
import { addQuestion } from "@/services";

export const createControlledInput = async (
	formId: number,
	questionsState: Question[],
	setQuestionsState: Dispatch<SetStateAction<Question[]>>,
) => {
	let question: Question = {
		id: uuid(),
		question: `Question ${questionsState.length + 1}`,
		type: "short" as QuestionType,
		description: "",
		order: questionsState.length + 1,

		displayInTable: false,
	};

	const newQuestion = await addQuestion(formId, question);

	question = {
		...question,
		id: newQuestion.toString(),
	};

	setQuestionsState([...questionsState, question]);
};
