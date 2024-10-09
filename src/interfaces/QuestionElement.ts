export interface QuestionElement {
	questionName: string;
	questionType: "short" | "long" | "numeric" | "single" | "multiple";
	description: string;
	options?: string[];
	value?: string;
}
