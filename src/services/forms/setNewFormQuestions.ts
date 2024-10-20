"use server";

import type { NewQuestion } from "@/interfaces";
import { questionsRepository } from "@/repositories";
import { validateQuestions } from "@/validators";

export const setNewFormQuestions = async (
	formId: number,
	questions: NewQuestion[],
) => {
	const isFormValid = validateQuestions.safeParse(questions);

	if (!isFormValid.success) return "INVALID_QUESTIONS";

	try {
		await questionsRepository.setNewFormQuestions(formId, questions);
	} catch (error) {
		return "ERROR";
	}

	return "SUCCESS";
};
