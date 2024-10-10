import type { Dispatch, SetStateAction } from "react";
import type { Question } from "@/interfaces";

export const createControlledInput = (
	questionsState: Question[],
	setQuestionsState: Dispatch<SetStateAction<Question[]>>,
) => {
	const newQuestion: Question = {
		id: (questionsState.length + 1).toString(),
		questionName: "New Question",
		questionType: "short",
		description: "Add a description",
		options: [],
		displayInTable: false,
	};
	setQuestionsState([...questionsState, newQuestion]);
};
