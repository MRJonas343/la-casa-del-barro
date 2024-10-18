"use server";

import { questionsRepository } from "@/repositories";

export const getFormQuestions = async (formId: number) => {
	const questions = await questionsRepository.getQuestionsByFormId(formId);

	return questions;
};
