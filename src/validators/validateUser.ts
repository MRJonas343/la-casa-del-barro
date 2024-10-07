import { z } from "zod";

export const validateUser = z.object({
	id: z.string(),
	name: z.string().min(1).max(50),
	email: z.string().email(),
	password: z.string().min(8).max(50),
	role: z.string().optional(),
});
