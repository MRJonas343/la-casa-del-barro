"use server";

import { filledFormsRepository } from "@/repositories";

export const getFilledForm = async (formId: number, userId: number) => {
	const filledForm = await filledFormsRepository.getFormWithUserAnswers(
		userId,
		formId,
	);

	return filledForm;
};
