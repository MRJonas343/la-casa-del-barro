"use server";

import { commentsRepository } from "@/repositories";

export const getComments = async (formId: number) => {
	const comments = await commentsRepository.getComments(formId);

	return comments;
};
