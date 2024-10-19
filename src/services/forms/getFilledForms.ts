"use server";

import { dashboardRepository } from "@/repositories";

export const getFilledForms = async (userId: number) => {
	const forms = await dashboardRepository.getUserFilledForms(userId);

	const formatedForms = forms.map((form) => ({
		...form,
		filledAt: form.filledAt.toDateString(),
	}));

	return formatedForms;
};
