"use server";

import { resultRepository } from "@/repositories";

export const getFormResults = async (formId: number) => {
	const responses = await resultRepository.getFormResponses(formId);

	return responses;
};
