import { int, mysqlTable } from "drizzle-orm/mysql-core";
import { forms, tags } from ".";

export const formTags = mysqlTable("form_tags", {
	id: int("id").autoincrement().primaryKey(),
	form_id: int("form_id")
		.notNull()
		.references(() => forms.id, { onDelete: "cascade" }),
	tag_id: int("tag_id")
		.notNull()
		.references(() => tags.id, { onDelete: "cascade" }),
});
