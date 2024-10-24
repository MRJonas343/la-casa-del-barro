"use server";

import type { Changes, QuestionType } from "@/interfaces";
import { editFormRepository } from "@/repositories";

export const updateFormQuestions = async (questions: Changes[]) => {
	for (const question of questions) {
		if (question.fieldChanged === "question") {
			await editFormRepository.editQuestionName(
				question.questionId,
				question.newValue as string,
			);
			continue;
		}
		if (question.fieldChanged === "description") {
			await editFormRepository.editQuestionDescription(
				question.questionId,
				question.newValue as string,
			);
			return;
		}
		if (question.fieldChanged === "displayInTable") {
			await editFormRepository.editQuestionDisplayInTable(
				question.questionId,
				question.newValue as boolean,
			);
			return;
		}
		if (question.fieldChanged === "type") {
			await editFormRepository.editQuestionType(
				question.questionId,
				question.newValue as QuestionType,
			);
			return;
		}
	}

	return "SUCCESS";
};
