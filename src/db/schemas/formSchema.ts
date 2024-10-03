import { desc, sql } from "drizzle-orm";
import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { users } from "./userSchema";

export const forms = sqliteTable(
	"forms",
	{
		id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
		author_id: integer("author_id")
			.notNull()
			.references(() => users.id),
		created_at: text("created_at").default(sql`(CURRENT_TIMESTAMP)`).notNull(),
		title: text("title").notNull(),
		description: text("description").notNull(),
		imageUrl: text("image_url").notNull(),
	},
	(table) => ({
		titleIdx: index("idx_title").on(table.title),
		descriptionIdx: index("idx_description").on(table.description),
	}),
);

export type InsertUser = typeof forms.$inferInsert;
