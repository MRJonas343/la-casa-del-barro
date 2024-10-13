"use server";

import { validateNewUserData } from "@/validators";
import { hashPassword } from "@/utils/password";
import { userRepository } from "@/repositories";
import { signIn } from "@/auth";

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

		const isEmailAlreadyInUse = await userRepository.findUserByEmail(email);

		if (isEmailAlreadyInUse) return "USER_EXISTS";

		const hashedPassword = await hashPassword(password);

		const user = await userRepository.createUser({
			name,
			email,
			hashedPassword,
		});

		if (user[0].affectedRows === 0) return "ERROR";

		await signIn("credentials", {
			id: user[0].insertId.toString(),
			name,
			email,
			role: "user",
			redirect: false,
		});

		return "SUCCESS";
	} catch (error) {
		console.log(error);
		return "ERROR";
	}
};
