"use server";

import { comparePassword } from "@/utils/password";
import { users } from "@/db/schemas/userSchema";
import { eq } from "drizzle-orm";
import { signIn } from "@/auth";
import { db } from "@/db";

export const authorize = async (email: string, password: string) => {
	try {
		const userExists = await db.query.users.findFirst({
			where: eq(users.email, email),
		});

		if (!userExists) return "USER_NOT_EXISTS";

		const passwordIsCorrect = await comparePassword(
			password,
			userExists.password,
		);

		if (!passwordIsCorrect) return "INVALID_PASSWORD";

		await signIn("credentials", {
			id: userExists.id.toString(),
			name: userExists.name,
			email,
			password,
			role: userExists.role,
			redirect: false,
		});

		return "SUCCESS";
	} catch (error) {
		//@ts-ignore
		if (error.type === "CredentialsSignin") {
			return "ERRORLOGIN";
		}

		return "ERROR";
	}
};
