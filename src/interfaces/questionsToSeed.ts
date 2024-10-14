export interface QuestionsToSeed {
	formId: number;
	question: string;
	description: string;
	displayInTable: boolean;
	order: number;
	type: "short" | "long" | "numeric" | "single" | "multiple";
}
