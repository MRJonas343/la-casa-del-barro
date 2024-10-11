import { sql } from "drizzle-orm";
import { users } from "./userSchema";
import {
	index,
	int,
	mysqlTable,
	text,
	timestamp,
	varchar,
} from "drizzle-orm/mysql-core";

export const forms = mysqlTable(
	"forms",
	{
		id: int("id").autoincrement().primaryKey(),
		author_id: int("author_id")
			.notNull()
			.references(() => users.id, { onDelete: "cascade" }),
		created_at: timestamp(),
		title: varchar("title", { length: 150 }).notNull(),
		description: text("description").notNull(),
		imageUrl: varchar("image_url", { length: 255 }).notNull(),
	},
	(table) => ({
		titleIdx: index("idx_title").on(table.title),
	}),
);

export const addFullTextInFormDescription = sql`
  ALTER TABLE forms ADD FULLTEXT(description);
`;

export type InsertForm = typeof forms.$inferInsert;
