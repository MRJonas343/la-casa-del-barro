import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { forms } from "./formSchema";

export const questions = sqliteTable(
	"questions",
	{
		id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
		formId: integer("form_id", { mode: "number" })
			.notNull()
			.references(() => forms.id),
		question: text("question").notNull(),
		description: text("description").notNull(),
		displayInTable: integer("display_in_table", { mode: "boolean" }),
		type: text("type", {
			enum: ["short", "long", "numeric", "single"],
		}).notNull(),
	},
	(table) => ({
		questionIdx: index("idx_question").on(table.question),
		descriptionQuestionIdx: index("idx_description_question").on(
			table.description,
		),
	}),
);

export type InsertUser = typeof questions.$inferInsert;
