import { z } from "zod";

export const validateQuestions = z.array(
	z.object({
		id: z.string(),
		questionName: z.string().min(1).max(150),
		questionType: z.string().min(1).max(150),
		description: z.string().optional(),
		displayInTable: z.boolean(),
		options: z.array(z.string()).optional(),
		value: z.string().optional(),
	}),
);
