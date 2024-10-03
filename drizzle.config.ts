import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env" });

export default defineConfig({
	schema: [
		"./src/db/schemas/answerSchema.ts",
		"./src/db/schemas/commentSchema.ts",
		"./src/db/schemas/filledFormSchema.ts",
		"./src/db/schemas/formSchema.ts",
		"./src/db/schemas/likeSchema.ts",
		"./src/db/schemas/questionSchema.ts",
		"./src/db/schemas/userSchema.ts",
	],
	out: "./migrations",
	dialect: "sqlite",
	driver: "turso",
	dbCredentials: {
		url: process.env.TURSO_CONNECTION_URL ?? "",
		authToken: process.env.TURSO_AUTH_TOKEN ?? "",
	},
});
