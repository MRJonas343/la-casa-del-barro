import { updateFillForm } from "@/services/filledForms/updateFillForm";
import type { Question } from "@/interfaces";
import type { MutableRefObject } from "react";
import toast from "react-hot-toast";

export const updateForm = async (
	questionsState: Question[],
	initialData: MutableRefObject<Question[]>,
) => {
	const dataToUpdate: Question[] = [];

	for (const question of questionsState) {
		if (
			question.answer !==
			initialData.current.find((q) => q.id === question.id)?.answer
		) {
			dataToUpdate.push(question);
		}
	}

	if (dataToUpdate.length === 0) return toast("No changes made");

	const result = await updateFillForm(dataToUpdate);

	if (result === "SUCCESS") toast.success("Questions updated successfully");
};
