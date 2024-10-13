import { int, mysqlTable } from "drizzle-orm/mysql-core";
import { forms, users } from ".";

export const likes = mysqlTable("likes", {
	id: int("id").primaryKey().autoincrement(),
	user_id: int("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	form_id: int("form_id")
		.notNull()
		.references(() => forms.id, { onDelete: "cascade" }),
});

export type InsertLike = typeof likes.$inferInsert;
