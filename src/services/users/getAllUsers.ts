"use server";

import { userRepository } from "@/repositories";

export const getAllUsers = async () => {
	const users = await userRepository.findAllUsers();

	return users;
};
