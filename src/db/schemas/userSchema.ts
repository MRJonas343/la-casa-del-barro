import { sql } from "drizzle-orm";
import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable(
	"users",
	{
		id: integer("id", { mode: "number" })
			.primaryKey({ autoIncrement: true })
			.notNull(),
		name: text("name").notNull(),
		createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`).notNull(),
		email: text("email").unique().notNull(),
		password: text("password").notNull(),
		role: text("role", { enum: ["admin", "user"] })
			.notNull()
			.default("user"),
		status: text("status", { enum: ["active", "blooked"] })
			.notNull()
			.default("active"),
	},
	(table) => ({
		nameIdx: index("idx_name").on(table.name),
		emailIdx: index("idx_email").on(table.email),
	}),
);

export type InsertUser = typeof users.$inferInsert;
