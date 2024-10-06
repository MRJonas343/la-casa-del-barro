import type { User } from "@/interfaces/UserCredentials";
import { users } from "../schemas/userSchema";
import { db } from "..";

export const insertUser = async (user: User) => {
	const result = await db.insert(users).values({
		email: user.email,
		name: user.name,
		password: user.password,
		role: user.role,
	});

	return result;
};
