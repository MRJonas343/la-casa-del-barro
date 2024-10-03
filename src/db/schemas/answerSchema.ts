import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { questions } from "./questionSchema";
import { filledForms } from "./filledFormSchema";

export const answers = sqliteTable("answers", {
	id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
	questionID: integer("question_id", { mode: "number" })
		.notNull()
		.references(() => questions.id),
	filledFormID: integer("filled_form_id", { mode: "number" })
		.notNull()
		.references(() => filledForms.id),
	value: text("value").notNull(),
});

export type InsertUser = typeof answers.$inferInsert;
