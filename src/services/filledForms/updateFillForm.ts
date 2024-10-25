"use server";

import type { Question } from "@/interfaces";
import { filledFormsRepository } from "@/repositories";

export const updateFillForm = async (data: Question[]) => {
	await filledFormsRepository.updateFilledForm(data);

	return "SUCCESS";
};
