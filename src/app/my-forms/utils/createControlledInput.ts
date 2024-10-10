import type { Dispatch, SetStateAction } from "react";
import type { Question } from "@/interfaces";
import { v4 as uuid } from "uuid";

export const createControlledInput = (
	questionsState: Question[],
	setQuestionsState: Dispatch<SetStateAction<Question[]>>,
) => {
	const newQuestion: Question = {
		id: uuid(),
		questionName: "New Question",
		questionType: "short",
		description: "Add a description",
		options: [],
		displayInTable: false,
	};
	setQuestionsState([...questionsState, newQuestion]);
};
