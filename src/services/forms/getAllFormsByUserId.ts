"use server";

import { dashboardRepository } from "@/repositories";

export const getAllFormsByUserId = async (userId: number) => {
	const forms = await dashboardRepository.getAllUserFormsByUserId(userId);

	return forms;
};
