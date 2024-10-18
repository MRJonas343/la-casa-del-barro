"use server";

import { commentsRepository } from "@/repositories";

export const createComment = async (
	formId: number,
	userId: number,
	comment: string,
) => {
	const result = await commentsRepository.createComment(
		userId,
		formId,
		comment,
	);

	const newComments = await commentsRepository.getComments(formId);

	return newComments;
};
