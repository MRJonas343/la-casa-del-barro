import { z } from "zod";

export const validateNewForm = z.object({
	title: z.string().min(1).max(150),
	description: z.string().min(1).max(500),
	topic: z.string().min(1).max(150),
	isPublic: z.boolean(),
});
