"use server";

import { validateNewUserData } from "@/validators";
import { hashPassword } from "@/utils/password";
import { InsertUser, users } from "@/db/schemas";
import { eq } from "drizzle-orm";
import { signIn } from "@/auth";
import { db } from "@/db";

export const createUser = async (
	name: string,
	email: string,
	password: string,
) => {
	try {
		const validatedUser = validateNewUserData.safeParse({
			name,
			email,
			password,
		});

		if (!validatedUser.success) return "INVALID_CREDENTIALS";

		const userExists = await db.query.users.findFirst({
			where: eq(users.email, email),
		});

		if (userExists) return "USER_EXISTS";

		const hashedPassword = await hashPassword(password);

		const user = await db.insert(users).values({
			name,
			email,
			password: hashedPassword,
			status: "active",
			role: "user",
		});

		if (user[0].affectedRows === 0) return "ERROR";

		await signIn("credentials", {
			id: user[0].insertId.toString(),
			name,
			email,
			password,
			role: "user",
			redirect: false,
		});

		return "SUCCESS";
	} catch (error) {
		console.log(error);
		return "ERROR";
	}
};
