"use server";

import { editFormRepository } from "@/repositories";
import { revalidatePath } from "next/cache";

export const swapQuestions = async (
	formId: number,
	quesId1: number,
	quesId2: number,
) => {
	const result = await editFormRepository.swapQuestions(
		formId,
		quesId1,
		quesId2,
	);

	revalidatePath(`/dashboard/edit-form/${formId}`);
	return result;
};
