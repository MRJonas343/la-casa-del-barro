import {
	boolean,
	int,
	mysqlTable,
	text,
	mysqlEnum,
	index,
	varchar,
} from "drizzle-orm/mysql-core";
import { forms } from "./formSchema";
import { sql } from "drizzle-orm";

export const questions = mysqlTable(
	"questions",
	{
		id: int("id").primaryKey().autoincrement(),
		formId: int("form_id")
			.notNull()
			.references(() => forms.id, { onDelete: "cascade" }),
		question: varchar("question", { length: 255 }).notNull(),
		description: text("description").notNull(),
		displayInTable: boolean("display_in_table").default(false),
		type: mysqlEnum("type", [
			"short",
			"long",
			"numeric",
			"single",
			"multiple",
		]).default("short"),
	},
	(table) => ({
		questionIdx: index("idx_question").on(table.question),
	}),
);

export const addFullTextInQuestionDescription = sql`
  ALTER TABLE questions ADD FULLTEXT(description);
`;

export type InsertQuestion = typeof questions.$inferInsert;
