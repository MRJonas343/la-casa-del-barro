import { createOptions } from "@/utils/createOptions";
import { questions, options } from "@/db/schemas";
import type { Question } from "@/interfaces";
import { eq } from "drizzle-orm";
import { db } from "@/db";

const setNewFormQuestions = async (
	formId: number,
	questionsArray: Question[],
) => {
	const questionsObjects = questionsArray.map((question, index) => ({
		formId: formId,
		question: question.questionName,
		description: question.description,
		displayInTable: question.displayInTable,
		order: index + 1,
		type: question.questionType,
	}));

	await db.insert(questions).values(questionsObjects);

	const insertedQuestions = await db
		.select({
			id: questions.id,
			question: questions.question,
		})
		.from(questions)
		.where(eq(questions.formId, formId));

	const optionsObjectsToInsert = createOptions(
		insertedQuestions,
		questionsArray,
	);

	if (optionsObjectsToInsert.length > 0) {
		await db.insert(options).values(optionsObjectsToInsert);
	}
};

export const questionsRepository = {
	setNewFormQuestions,
};
