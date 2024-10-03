import { config } from "dotenv";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { tables } from "./schemas";

config({ path: ".env" });

const client = createClient({
	url: process.env.TURSO_CONNECTION_URL ?? "",
	authToken: process.env.TURSO_AUTH_TOKEN ?? "",
});

export const db = drizzle(client, {
	schema: tables,
});
