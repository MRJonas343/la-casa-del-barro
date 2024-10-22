"use server";

import { formRepository } from "@/repositories";

export const getFormsByTag = async (
	offset: number,
	limit: number,
	tag?: string,
) => {
	if (!tag) return { hasMore: false, forms: [] };

	const forms = await formRepository.getFormsByTag(tag, offset, limit);

	const hasMore = forms.length === limit;

	return { hasMore, forms };
};
