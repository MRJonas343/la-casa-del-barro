import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { questions } from ".";

export const options = mysqlTable("options", {
	id: int("id").primaryKey().autoincrement(),
	questionId: int("question_id")
		.notNull()
		.references(() => questions.id, { onDelete: "cascade" }),
	optionText: varchar("option_text", { length: 255 }).notNull(),
});
