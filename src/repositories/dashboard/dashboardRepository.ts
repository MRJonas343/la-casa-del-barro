import { db } from "@/db";
import { filledForms, forms } from "@/db/schemas";
import { users } from "@/db/schemas";
import { countDistinct, eq } from "drizzle-orm";
import { likes } from "@/db/schemas";

const getUserForms = async (userId: number) => {
	const result = await db
		.select({
			id: forms.id,
			title: forms.title,
			totalAnswers: countDistinct(filledForms.id),
			likes: countDistinct(likes.id),
		})
		.from(forms)
		.innerJoin(users, eq(forms.author_id, users.id))
		.leftJoin(filledForms, eq(filledForms.form_id, forms.id))
		.leftJoin(likes, eq(likes.form_id, forms.id))
		.where(eq(users.id, userId))
		.groupBy(forms.id, forms.title);

	return result;
};

export const dashboardRepository = {
	getUserForms,
};
