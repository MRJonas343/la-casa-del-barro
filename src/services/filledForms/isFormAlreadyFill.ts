"use server";

import { filledFormsRepository } from "@/repositories";

export const isFormAlreadyFill = async (userId: number, formId: number) => {
	const result = await filledFormsRepository.getFilledFormsByUserId(
		userId,
		formId,
	);

	if (result) return true;

	return false;
};
