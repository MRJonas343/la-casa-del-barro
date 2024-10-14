import type { Question, QuestionType } from "@/interfaces";
import { v4 as uuid } from "uuid";

export const initialQuestion: Question = {
	id: uuid(),
	questionName: "",
	questionType: "" as QuestionType,
	description: "",
	displayInTable: false,
	options: [],
};
