import type { formGeneralData, QuestionProps } from ".";
import type { Comment } from "./Comment";
export interface FormProps {
	questions: QuestionProps[];
	formGeneralData: formGeneralData;
	comments: Comment[];
}
