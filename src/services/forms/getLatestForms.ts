"use server";

import { formRepository } from "@/repositories";

export const getLatestForms = async (offset: number, limit: number) => {
	const forms = await formRepository.getLastForms(offset, limit);

	//*Parse ids to

	return forms;
};
