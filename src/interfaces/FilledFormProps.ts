import type { QuestionType } from ".";

export interface FilledFormProps {
	form: Form | undefined;
	commentsResult: CommentsResult[];
	questions: Question[];
}

export interface CommentsResult {
	id: number;
	comment: string;
	userName: string;
}

export interface Form {
	id: number;
	author_id: number;
	created_at: Date;
	title: string;
	topic: string;
	description: string;
	isPublic: boolean;
	imageUrl: string;
}

export interface Question {
	id: number;
	question: string;
	description: string | null;
	displayInTable: boolean;
	order: number;
	type: string;
	answer: unknown;
	options?: unknown[];
}

export interface NewQuestion {
	id: string;
	questionName: string;
	questionType: QuestionType;
	description: string;
	displayInTable: boolean;
	options?: string[];
	value?: string;
}
