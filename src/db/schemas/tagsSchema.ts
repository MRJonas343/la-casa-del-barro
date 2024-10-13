import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const tags = mysqlTable("tags", {
	id: int("id").autoincrement().primaryKey(),
	tag: varchar("tag", { length: 100 }).notNull(),
});
