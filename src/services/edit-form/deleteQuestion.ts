"use server";

import { editFormRepository } from "@/repositories";
import { revalidatePath } from "next/cache";

export const deleteQuestion = async (formId: number, questionId: number) => {
	await editFormRepository.deleteQuestionById(formId, questionId);

	revalidatePath(`/dashboard/edit-form/${formId}`);
};
