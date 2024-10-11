import { int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";
import { users } from "./userSchema";

export const sessions = mysqlTable("session", {
	sessionToken: varchar("sessionToken", { length: 255 }).primaryKey(),
	userId: int("userId")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	expires: timestamp("expires", { mode: "date" }).notNull(),
});
