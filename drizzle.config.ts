import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env" });

export default defineConfig({
	dialect: "sqlite",
	schema: [
		"./src/db/schemas/accountsSchema.ts",
		"./src/db/schemas/authenticatorsSchema.ts",
		"./src/db/schemas/answersSchema.ts",
		"./src/db/schemas/commentsSchema.ts",
		"./src/db/schemas/filledFormSchema.ts",
		"./src/db/schemas/formsSchema.ts",
		"./src/db/schemas/likesSchema.ts",
		"./src/db/schemas/questionsSchema.ts",
		"./src/db/schemas/sessionsSchema.ts",
		"./src/db/schemas/usersSchema.ts",
	],
	dbCredentials: {
		url: process.env.TURSO_CONNECTION_URL ?? "",
		token: process.env.TURSO_AUTH_TOKEN ?? "",
	},
});
