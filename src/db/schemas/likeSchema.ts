import { integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { users } from "./userSchema";
import { forms } from "./formSchema";

export const likes = sqliteTable("likes", {
	id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
	user_id: integer("user_id", { mode: "number" })
		.notNull()
		.references(() => users.id),
	form_id: integer("form_id", { mode: "number" })
		.notNull()
		.references(() => forms.id),
});

export type InsertUser = typeof likes.$inferInsert;
