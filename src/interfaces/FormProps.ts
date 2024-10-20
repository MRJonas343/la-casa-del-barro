import type { Comment } from "./Comment";
import type { formGeneralData, QuestionProps } from "./question";
export interface FormProps {
	questions: QuestionProps[];
	formGeneralData: formGeneralData;
	comments: Comment[];
}
