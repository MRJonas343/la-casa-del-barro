export interface UserForms {
	formId: number;
	formName: string;
	topic: string;
	questions: (string | null)[];
}
export interface MyFormsTableProps {
	forms: UserForms[];
}
