"use server";

import { formRepository } from "@/repositories";

export const getPopularForms = async () => {
	const forms = await formRepository.getPopularForms();

	return forms;
};
