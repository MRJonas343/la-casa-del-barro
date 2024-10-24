"use server";

import type { Question } from "@/interfaces/formDataToUpdate";
import { editFormRepository } from "@/repositories";

export const addQuestion = async (formId: number, question: Question) => {
	const result = await editFormRepository.addQuestionById(formId, question);

	return result[0].insertId;
};
