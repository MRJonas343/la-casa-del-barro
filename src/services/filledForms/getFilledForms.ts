"use server";

import { filledFormsRepository } from "@/repositories";

export const getFilledForms = async (formId: number) => {
	const data = await filledFormsRepository.getFilledFormsByFormId(formId);

	const filledForms = data.map((form) => ({
		...form,
		filledAt: form.filledAt.toDateString(),
	}));

	return filledForms;
};
