import { users } from "./userSchema";
import {
	int,
	mysqlTable,
	text,
	timestamp,
	varchar,
} from "drizzle-orm/mysql-core";

export const forms = mysqlTable("forms", {
	id: int("id").autoincrement().primaryKey(),
	author_id: int("author_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	created_at: timestamp(),
	title: text("title").notNull(),
	description: text("description").notNull(),
	imageUrl: varchar("image_url", { length: 255 }).notNull(),
});

export type InsertForm = typeof forms.$inferInsert;
