"use server";

import type { UserType } from "@/interfaces";
import { formRepository, permissionRepository } from "@/repositories";

export const getFormToEdit = async (formId: number) => {
	const form = await formRepository.getFormById(formId);

	let usersWithPermissions: UserType[] = [];

	if (!form) return;

	if (!form.isPublic) {
		usersWithPermissions =
			await permissionRepository.getUsersWithPermissions(formId);
	}

	return { form, usersWithPermissions };
};
