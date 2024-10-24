import type { Dispatch, SetStateAction } from "react";
import type { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import type { Question } from "@/interfaces/formDataToUpdate";
import { swapQuestions } from "@/services";

export const changeQuestionsPositions = async (
	formId: number,
	questionsState: Question[],
	event: DragEndEvent,
	setQuestions: Dispatch<SetStateAction<Question[]>>,
) => {
	const { active, over } = event;

	if (!active || !over) return;

	if (active.id !== over.id) {
		setQuestions((prevQuestions) => {
			const oldIndex = prevQuestions.findIndex((item) => item.id === active.id);
			const newIndex = prevQuestions.findIndex((item) => item.id === over.id);

			return arrayMove(prevQuestions, oldIndex, newIndex);
		});

		const questionOrder1 = questionsState.find(
			(q) => q.id === active.id,
		)?.order;
		const questionOrder2 = questionsState.find((q) => q.id === over.id)?.order;

		if (!questionOrder1 || !questionOrder2) return;

		await swapQuestions(formId, active.id as number, over.id as number);
	}
};
