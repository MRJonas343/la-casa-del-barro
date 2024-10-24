"use server";

import { formRepository } from "@/repositories";
import { revalidatePath } from "next/cache";

export const deleteFormAction = async (formId: number) => {
	await formRepository.deleteFormById(formId);
	revalidatePath("/dashboard");
	return "SUCCESS";
};
