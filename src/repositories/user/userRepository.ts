import type { User } from "@/interfaces";
import { users } from "@/db/schemas";
import { eq } from "drizzle-orm";
import { db } from "@/db";

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

export const userRepository = {
	createUser,
	findUserByEmail,
	findUserById,
	findUserByName,
	deleteUser,
};
