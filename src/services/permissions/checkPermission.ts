"use server";

import { permissionRepository } from "@/repositories";

export const checkPermission = async (formId: number, userId: number) => {
	console.log("Checking permission", formId, userId);
	const result = await permissionRepository.getPermission(formId, userId);

	if (!result) return false;

	return true;
};
