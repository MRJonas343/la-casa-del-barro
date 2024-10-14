import type { Dispatch, SetStateAction } from "react";
import type { Question } from "@/interfaces";

export const deleteControlledQuestion = (
	id: string,
	setQuestionsState: Dispatch<SetStateAction<Question[]>>,
) => {
	setQuestionsState((prevState) =>
		prevState.filter((question) => question.id !== id),
	);
};
