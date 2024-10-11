import { defineConfig } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
	out: "./migrations",
	schema: [
		"./src/db/schemas/userSchema.ts",
		"./src/db/schemas/accountsSchema.ts",
		"./src/db/schemas/sessionsSchema.ts",
		"./src/db/schemas/formSchema.ts",
		"./src/db/schemas/likeSchema.ts",
		"./src/db/schemas/questionSchema.ts",
		"./src/db/schemas/filledFormSchema.ts",
		"./src/db/schemas/answerSchema.ts",
		"./src/db/schemas/commentSchema.ts",
		"./src/db/schemas/optionsSchema.ts",
	],
	dialect: "mysql",
	dbCredentials: {
		url: process.env.DATABASE_URL ?? "",
	},
});
