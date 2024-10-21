"use server";

import { userRepository } from "@/repositories";

export const getUsersByEmail = async (email: string) => {
	const users = await userRepository.findUsersByEmail(email);

	return users;
};
