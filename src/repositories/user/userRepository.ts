import type { User } from "@/interfaces";
import { users } from "@/db/schemas";
import { db } from "@/db";
import { like, sql, eq } from "drizzle-orm";

const createUser = async (user: User) => {
	const result = await db.insert(users).values({
		name: user.name,
		email: user.email,
		password: user.hashedPassword,
		role: "user",
		status: "active",
	});

	return result;
};

const findUserByEmail = async (email: string) => {
	const result = await db.query.users.findFirst({
		where: eq(users.email, email),
	});

	return result;
};

const findUserById = async (id: number) => {
	const result = await db.query.users.findFirst({
		where: eq(users.id, id),
	});

	return result;
};

const findUserByName = async (name: string) => {
	const result = await db.query.users.findFirst({
		where: eq(users.name, name),
	});

	return result;
};

const deleteUser = async (id: number) => {
	const result = await db.delete(users).where(eq(users.id, id));

	return result;
};

const findUsersByName = async (name: string) => {
	const result = await db
		.select({
			id: users.id,
			name: users.name,
			email: users.email,
		})
		.from(users)
		.where(like(users.name, `%${name}%`))
		.limit(10);

	return result;
};

const findUsersByEmail = async (email: string) => {
	const result = await db
		.select({
			id: users.id,
			name: users.name,
			email: users.email,
		})
		.from(users)
		.where(like(users.email, `%${email}%`))
		.limit(10);

	return result;
};

export const userRepository = {
	createUser,
	findUserByEmail,
	findUserById,
	findUserByName,
	deleteUser,
	findUsersByName,
	findUsersByEmail,
};
