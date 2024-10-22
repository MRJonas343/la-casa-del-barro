"use server";

import { permissionRepository } from "@/repositories";

export const checkPermission = async (formId: number, userId: number) => {
	const result = await permissionRepository.getPermission(formId, userId);

	if (!result) return false;

	return true;
};
