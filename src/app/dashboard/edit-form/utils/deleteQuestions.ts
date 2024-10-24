import type { Dispatch, SetStateAction } from "react";
import type { Question } from "@/interfaces/formDataToUpdate";
import { deleteQuestion } from "@/services";

export const deleteControlledQuestion = async (
	questonId: number,
	formId: number,
	setQuestionsState: Dispatch<SetStateAction<Question[]>>,
	onOpen: () => void,
) => {
	await deleteQuestion(formId, questonId);

	setQuestionsState((prevState) =>
		prevState.filter((question) => Number.parseInt(question.id) !== questonId),
	);
};
