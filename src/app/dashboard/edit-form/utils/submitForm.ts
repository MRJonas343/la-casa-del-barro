import type { FormSettingsType } from "@/interfaces";
import type { FormGeneralData } from "@/interfaces/formDataToUpdate";
import type { MutableRefObject } from "react";
import type { FormSettingsState } from "../store/state";
import { updateFormSetting } from "@/services";

export const onSubmit = async (
	data: FormSettingsType,
	initialData: MutableRefObject<FormGeneralData>,
	state: FormSettingsState,
) => {
	const dataToUpdate = {};
	const imageInForm = new FormData();

	if (data.title !== initialData.current.form.title) {
		Object.assign(dataToUpdate, { title: data.title });
	}

	if (data.topic !== initialData.current.form.topic) {
		Object.assign(dataToUpdate, { topic: data.topic });
	}

	if (data.otherTopic) {
		Object.assign(dataToUpdate, { otherTopic: data.otherTopic });
	}

	if (data.description !== initialData.current.form.description) {
		Object.assign(dataToUpdate, { description: data.description });
	}

	if (state.image) {
		imageInForm.append("image", state.image);
	}

	if (data.isPublic !== initialData.current.form.isPublic) {
		Object.assign(dataToUpdate, { isPublic: data.isPublic });
	}

	const initialTags = initialData.current.form.tags.map((tagObj) =>
		tagObj.id.toString(),
	);

	const arraysAreEqual = initialTags.every((value, index) => {
		return value === data.tags[index].toString();
	});

	if (!arraysAreEqual) {
		Object.assign(dataToUpdate, { tags: data.tags });
	}

	if (!data.isPublic) {
		const selectedUserIds = state.selectedUsers.map((user) => user.id);
		const initialUserIds = initialData.current.usersWithPermissions.map(
			(user) => user.id,
		);

		const addedUsers = selectedUserIds.filter(
			(id) => !initialUserIds.includes(id),
		);
		const removedUsers = initialUserIds.filter(
			(id) => !selectedUserIds.includes(id),
		);
		if (addedUsers.length > 0 || removedUsers.length > 0) {
			Object.assign(dataToUpdate, { users: state.selectedUsers });
		}
	}

	if (Object.keys(dataToUpdate).length === 0 && !state.image) return;

	const result = await updateFormSetting(
		initialData.current.form.id,
		dataToUpdate,
		imageInForm,
	);

	return dataToUpdate;
};
