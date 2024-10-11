import { int, mysqlTable, text } from "drizzle-orm/mysql-core";
import { users } from "./userSchema";
import { forms } from "./formSchema";
import { sql } from "drizzle-orm";

export const comments = mysqlTable("comments", {
	id: int("id").primaryKey().autoincrement(),
	user_id: int("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	form_id: int("form_id")
		.notNull()
		.references(() => forms.id, { onDelete: "cascade" }),
	comment: text("comment").notNull(),
});

export const addFullTextInComment = sql`
  ALTER TABLE comments ADD FULLTEXT(comment);
`;

export type InsertComment = typeof comments.$inferInsert;
