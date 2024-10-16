"use server";

import { formRepository } from "@/repositories";

export const getFormsByTag = async (
	tag: string,
	offset: number,
	limit: number,
) => {
	const forms = await formRepository.getFormsByTag(tag, offset, limit);

	const hasMore = forms.length === limit;

	return { hasMore, forms };
};
