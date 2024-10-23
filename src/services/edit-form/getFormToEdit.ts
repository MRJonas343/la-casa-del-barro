"use server";

import type { UserType } from "@/interfaces";
import {
	formRepository,
	permissionRepository,
	tagsRepository,
} from "@/repositories";

export const getFormToEdit = async (formId: number) => {
	const formData = await formRepository.getFormById(formId);
	if (!formData) return;

	const tags = await tagsRepository.getTagsByFormId(formId);

	const form = {
		...formData,
		tags: tags.map((tag) => ({
			id: tag.tagId,
			tag: tag.tagName,
		})),
	};

	let usersWithPermissions: UserType[] = [];

	if (!form.isPublic) {
		usersWithPermissions =
			await permissionRepository.getUsersWithPermissions(formId);
	}

	return { form, usersWithPermissions };
};
