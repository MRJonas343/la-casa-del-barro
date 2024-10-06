"use server";

import { validateNewUserData } from "@/validators/validateNewUserData";
import { hashPassword } from "@/utils/password";
import { users } from "@/db/schemas/userSchema";
import { signIn } from "../../../auth";
import { eq } from "drizzle-orm";
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
			createdAt: new Date().toLocaleString(),
			status: "active",
			role: "user",
		});

		if (user.rowsAffected === 0) return "ERROR";

		await signIn("credentials", {
			email,
			password,
			redirect: false,
		});

		return "SUCCESS";
	} catch (error) {
		console.log(error);
		return "ERROR";
	}
};
