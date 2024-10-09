import type { QuestionType } from "./QuestionType";

export interface Question {
	id: string;
	questionName: string;
	questionType: QuestionType;
	description: string;
	options?: string[];
	value?: string;
}
