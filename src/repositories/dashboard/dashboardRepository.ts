import { filledForms, forms, questions } from "@/db/schemas";
import { eq, and, desc } from "drizzle-orm";
import { db } from "@/db";

const getUserForms = async (userId: number) => {
	const formsResult = await db
		.select({
			formId: forms.id,
			formName: forms.title,
			topic: forms.topic,
			title: forms.title,
		})
		.from(forms)
		.where(eq(forms.author_id, userId));

	const formWithQuestions = await Promise.all(
		formsResult.map(async (form) => {
			const questionsResult = await db
				.select({
					question: questions.question,
				})
				.from(questions)
				.where(
					and(
						eq(questions.formId, form.formId),
						eq(questions.displayInTable, true),
					),
				);

			const questionsArray = questionsResult.map((q) => q.question);

			return {
				formId: form.formId,
				topic: form.topic,
				formName: form.formName,
				questions: questionsArray,
			};
		}),
	);

	return formWithQuestions;
};

const getUserFilledForms = async (userId: number) => {
	const result = await db
		.select({
			formId: forms.id,
			formName: forms.title,
			topic: forms.topic,
			filledAt: filledForms.filled_at,
		})
		.from(filledForms)
		.innerJoin(forms, eq(filledForms.form_id, forms.id))
		.where(eq(filledForms.user_id, userId))
		.orderBy(desc(filledForms.filled_at));

	return result;
};

export const dashboardRepository = {
	getUserForms,
	getUserFilledForms,
};
