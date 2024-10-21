"use server";

import { userRepository } from "@/repositories";

export const getUsersByName = async (name: string) => {
	const users = await userRepository.findUsersByName(name);

	return users;
};
