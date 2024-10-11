import {
	boolean,
	int,
	mysqlTable,
	text,
	mysqlEnum,
	index,
	varchar,
	json,
} from "drizzle-orm/mysql-core";
import { forms } from "./formSchema";
import { sql } from "drizzle-orm";

export const questions = mysqlTable("questions", {
	id: int("id").primaryKey().autoincrement(),
	formId: int("form_id")
		.notNull()
		.references(() => forms.id, { onDelete: "cascade" }),
	question: text("question"),
	description: text("description"),
	displayInTable: boolean("display_in_table").default(false),
	order: int("order").notNull(),
	type: mysqlEnum("type", [
		"short",
		"long",
		"numeric",
		"single",
		"multiple",
	]).default("short"),
});

export type InsertQuestion = typeof questions.$inferInsert;
