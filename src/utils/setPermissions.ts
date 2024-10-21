"use server";

import { permissionRepository } from "@/repositories";
import type { UserType } from "@/interfaces";

export const setPermissions = async (formId: number, users: UserType[]) => {
	const usersPermissions = users.map((user) => ({
		form_id: formId,
		user_id: user.id,
	}));

	await permissionRepository.createPermissions(usersPermissions);
};
