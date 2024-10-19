import { db } from "@/db";
import { forms, questions } from "@/db/schemas";
import { eq, and } from "drizzle-orm";

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

export const dashboardRepository = {
	getUserForms,
};
