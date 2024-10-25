"use server";

import { sendCopyOfAnswers } from "@/utils/sendCopyOfAnswers";
import type { NewFilledForm } from "@/interfaces";
import { formRepository } from "@/repositories";
import "dotenv/config";

export const fillForm = async (data: NewFilledForm) => {
	if (data.userEmail && data.shouldSendCopy) sendCopyOfAnswers(data);

	console.log(data);
	// const result = await formRepository.insertAnswers(data);

	// if (data.isFormLiked) await formRepository.insertLike(data);

	return "SUCCESS";
};
