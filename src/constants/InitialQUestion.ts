import type { Question } from "@/interfaces";
import { v4 as uuid } from "uuid";

export const initialQuestion: Question = {
	id: uuid(),
	questionName: "Question Name",
	questionType: "short",
	description: "This is a short description",
	displayInTable: false,
	options: [],
};
