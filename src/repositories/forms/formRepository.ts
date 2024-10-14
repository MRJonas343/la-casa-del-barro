import type { FormSettings } from "@/interfaces";
import { forms, formTags, likes, users } from "@/db/schemas";
import { db } from "@/db";
import { count, eq } from "drizzle-orm";
import { desc } from "drizzle-orm";

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

const getLastForms = async (offset: number, limit: number) => {
	const result = await db
		.select({
			id: forms.id,
			title: forms.title,
			authorName: users.name,
			imageUrl: forms.imageUrl,
			likes: count(likes.id),
		})
		.from(forms)
		.innerJoin(users, eq(forms.author_id, users.id))
		.leftJoin(likes, eq(likes.form_id, forms.id))
		.groupBy(forms.id, users.name, forms.title, forms.imageUrl)
		.orderBy(desc(forms.created_at))
		.limit(limit)
		.offset((offset - 1) * limit);

	return result;
};

const getFormsByTag = async (tag: string) => {
	const result = await db
		.select({
			id: forms.id,
			title: forms.title,
			authorName: users.name,
			imageUrl: forms.imageUrl,
			likes: count(likes.id),
		})
		.from(forms)
		.innerJoin(users, eq(forms.author_id, users.id))
		.leftJoin(likes, eq(likes.form_id, forms.id))
		.innerJoin(formTags, eq(forms.id, formTags.form_id))
		.where(eq(formTags.tag_id, Number.parseInt(tag)))
		.groupBy(forms.id, users.name, forms.title, forms.imageUrl)
		.orderBy(desc(forms.created_at));

	return result;
};

const findFormsWithFullTextSearch = async (search: string) => {
	//forms can be find by title, description, author
	//return result;
};

export const formRepository = {
	getLastForms,
	createForm,
};
