import type { FormSettings } from "@/interfaces";
import { forms, formTags } from "@/db/schemas";
import { db } from "@/db";

const createForm = async (
	data: FormSettings,
	userId: number,
	imageUrl: string,
) => {
	const result = await db.insert(forms).values({
		author_id: userId,
		title: data.title,
		topic: data.topic,
		description: data.description,
		imageUrl: imageUrl,
		isPublic: data.isPublic,
	});

	if (data.tags.length > 0) {
		const tags = data.tags.split(",").map((tag) => ({
			form_id: result[0].insertId,
			tag_id: Number.parseInt(tag),
		}));

		await db.insert(formTags).values(tags);
	}

	return result[0].insertId;
};

export const formRepository = {
	createForm,
};
