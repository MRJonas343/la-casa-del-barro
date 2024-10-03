import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { forms } from "./formSchema";
import { users } from "./userSchema";

export const filledForms = sqliteTable("filled_forms", {
	id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
	form_id: integer("form_id", { mode: "number" })
		.notNull()
		.references(() => forms.id),
	user_id: integer("user_id", { mode: "number" })
		.notNull()
		.references(() => users.id),
	filled_at: text("filled_at").default(sql`(CURRENT_TIMESTAMP)`).notNull(),
});

export type InsertUser = typeof filledForms.$inferInsert;
