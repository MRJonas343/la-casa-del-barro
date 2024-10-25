import type { Dispatch } from "react";
import type { FormQuestionsAction } from "../store/stateEditQuestions";

export const changeMultipleQuestionInputs = (
	id: string,
	options: string[],
	dispatch: Dispatch<FormQuestionsAction>,
) => {
	dispatch({
		type: "UPDATE_QUESTION_OPTIONS",
		payload: { id, options },
	});
};
