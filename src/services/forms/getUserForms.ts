"use server";

import { dashboardRepository } from "@/repositories";

export const getUserForms = async (userId: number) => {
	const forms = await dashboardRepository.getUserForms(userId);

	return forms;
};
