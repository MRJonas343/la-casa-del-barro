import { int, mysqlTable, timestamp } from "drizzle-orm/mysql-core";
import { forms } from "./formSchema";
import { users } from "./userSchema";

export const filledForms = mysqlTable("filled_forms", {
	id: int("id").primaryKey().autoincrement(),
	form_id: int("form_id")
		.notNull()
		.references(() => forms.id, { onDelete: "cascade" }),
	user_id: int("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	filled_at: timestamp(),
});

export type InsertFilledForm = typeof filledForms.$inferInsert;
