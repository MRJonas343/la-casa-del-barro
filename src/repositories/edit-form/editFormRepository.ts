import { db } from "@/db";
import { forms } from "@/db/schemas";
import { eq } from "drizzle-orm";

type FormUpdateData = {
	title?: string;
	topic?: string;
	description?: string;
	isPublic?: boolean;
	imageUrl?: string;
};

const getPrevImage = async (formId: number) => {
	const result = await db
		.select({
			imageUrl: forms.imageUrl,
		})
		.from(forms)
		.where(eq(forms.id, formId))
		.limit(1);

	return result[0].imageUrl;
};

const updateFormById = async (formId: number, data: FormUpdateData) => {
	if (Object.keys(data).length === 0) return;

	const result = await db.update(forms).set(data).where(eq(forms.id, formId));
};

export const editFormRepository = {
	getPrevImage,
	updateFormById,
};
