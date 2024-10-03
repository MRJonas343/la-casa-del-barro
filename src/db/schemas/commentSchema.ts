import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { users } from "./userSchema";
import { forms } from "./formSchema";

export const comments = sqliteTable(
	"comments",
	{
		id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
		user_id: integer("user_id", { mode: "number" })
			.notNull()
			.references(() => users.id),
		form_id: integer("form_id", { mode: "number" })
			.notNull()
			.references(() => forms.id),
		comment: text("comment").notNull(),
	},
	(table) => ({
		commentIdx: index("idx_comment").on(table.comment),
	}),
);

export type InsertUser = typeof comments.$inferInsert;
