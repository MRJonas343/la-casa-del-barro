import type { Comment } from "./Comment";
import type { formGeneralData, QuestionProps } from "./question";
export interface FormProps {
	isReadOnly: boolean;
	questions: QuestionProps[];
	formGeneralData: formGeneralData;
	comments: Comment[];
}
