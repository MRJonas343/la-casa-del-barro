"use server";

import { formRepository } from "@/repositories";

export const getFormsByTag = async (
	tag: string,
	offset: number,
	limit: number,
) => {
	console.log(tag);
	const forms = await formRepository.getFormsByTag(tag, offset, limit);

	return forms;
};
