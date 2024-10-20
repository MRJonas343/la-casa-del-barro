import type { NewQuestion } from "@/interfaces";

type insertedQuestions = {
	id: number;
	question: string | null;
};

export const createOptions = (
	insertedQuestions: insertedQuestions[],
	questionsArray: NewQuestion[],
) => {
	const optionsObjects = insertedQuestions.flatMap((question) => {
		const originalQuestion = questionsArray.find(
			(q) => q.questionName === question.question,
		);

		if (originalQuestion?.questionType === "multiple") {
			return (
				originalQuestion.options?.map((option) => ({
					questionId: question.id,
					optionText: option,
				})) || []
			);
		}
		return [];
	});
	return optionsObjects;
};
