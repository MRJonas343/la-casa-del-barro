"use server";

import { formRepository } from "@/repositories";

export const getFormById = async (id: number) => {
	const form = await formRepository.getFormById(id);

	if (!form) return;

	return form;
};
