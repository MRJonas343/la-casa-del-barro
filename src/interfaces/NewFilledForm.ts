import type { QuestionProps } from "./question";

export interface NewFilledForm {
	form: QuestionProps[];
	isFormLiked: boolean;
	shouldSendCopy: boolean;
	userId: number;
	formId: number;
	userEmail?: string | null;
	userName?: string | null;
	formName?: string | null;
}
