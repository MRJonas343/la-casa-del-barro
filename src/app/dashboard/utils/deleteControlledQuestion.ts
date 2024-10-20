import type { Dispatch, SetStateAction } from "react";
import type { NewQuestion } from "@/interfaces";

export const deleteControlledQuestion = (
	id: string,
	setQuestionsState: Dispatch<SetStateAction<NewQuestion[]>>,
) => {
	setQuestionsState((prevState) =>
		prevState.filter((question) => question.id !== id),
	);
};
