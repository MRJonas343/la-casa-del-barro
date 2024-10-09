import type { Question } from "@/interfaces";

export const questions: Question[] = [
	{
		id: "1",
		questionName: "Question Name",
		questionType: "short",
		description: "This is a short description",
	},
	{
		id: "2",
		questionName: "What is your age?",
		questionType: "numeric",
		description: "This is a long description",
	},
	{
		id: "3",
		questionName: "What is your email?",
		questionType: "long",
		description: "This is a long description",
	},
	{
		id: "4",
		questionName: "Do you like apples?",
		questionType: "single",
		description: "This is a long description",
		options: ["Yes", "No"],
	},
	{
		id: "5",
		questionName: "What is your favorite food?",
		questionType: "multiple",
		description: "This is a long description",
		options: ["Pizza", "Burger", "Tacos"],
	},
];
