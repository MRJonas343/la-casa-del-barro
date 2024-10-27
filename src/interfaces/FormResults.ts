export interface FormeResults {
	questionId: number;
	question: string;
	type: "short" | "long" | "numeric" | "single" | "multiple";
	options?: string[];
	answers: Array<boolean | number | null | string>;
}
