import type { QuestionType } from "./QuestionType";

export interface QuestionElementProps {
	id: string;
	questionName: string;
	onQuestionChange: (id: string, key: string, value: string | boolean) => void;
	deleteQuestion: (id: string) => void;
	onOptionsChange: (id: string, options: string[]) => void;
	questionType: QuestionType;
	description: string;
	displayInTable: boolean;
	options?: string[];
	value?: string;
	disableType?: boolean;
}
