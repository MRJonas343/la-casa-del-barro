import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const users = sqliteTable(
	"user",
	{
		id: integer("id", { mode: "number" })
			.primaryKey({ autoIncrement: true })
			.notNull(),
		name: text("name").notNull(),
		createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`).notNull(),
		email: text("email").unique().notNull(),
		emailVerified: integer("emailVerified", { mode: "timestamp_ms" }),
		password: text("password").notNull(),
		role: text("role", { enum: ["admin", "user"] })
			.notNull()
			.default("user"),
		status: text("status", { enum: ["active", "blooked"] })
			.notNull()
			.default("active"),
		image: text("image"),
	},
	(table) => ({
		nameIdx: index("idx_name").on(table.name),
		emailIdx: index("idx_email").on(table.email),
	}),
);

export type InsertUser = typeof users.$inferInsert;
