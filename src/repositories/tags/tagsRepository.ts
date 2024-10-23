import { db } from "@/db";
import { eq } from "drizzle-orm";
import { formTags, tags } from "@/db/schemas";

const getTagsByFormId = async (formId: number) => {
	const result = await db
		.select({
			tagId: tags.id,
			tagName: tags.tag,
		})
		.from(formTags)
		.innerJoin(tags, eq(formTags.tag_id, tags.id))
		.where(eq(formTags.form_id, formId));

	return result;
};

export const tagsRepository = {
	getTagsByFormId,
};
