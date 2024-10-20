import type { QuestionType, NewQuestion } from "@/interfaces";
import { v4 as uuid } from "uuid";

export const initialQuestion: NewQuestion = {
	id: uuid(),
	questionName: "",
	questionType: "" as QuestionType,
	description: "",
	displayInTable: false,
	options: [],
};
