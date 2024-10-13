"use server";

import { getImageUrl } from "@/utils/getImageUrl";
import type { FormSettings } from "@/interfaces";
import { formRepository } from "@/repositories";
import { validateNewForm } from "@/validators";
import "dotenv/config";

export const createForm = async (
	data: FormSettings,
	userId: number,
	imageInForm?: FormData,
) => {
	const isNewFormValid = validateNewForm.safeParse(data);

	if (!isNewFormValid.success) return "INVALID_FORM";

	const imageUrl = await getImageUrl(imageInForm, userId, data.title);

	const formId = await formRepository.createForm(data, userId, imageUrl);

	return formId;
};
