import { compare, genSalt, hashSync } from "bcryptjs";

export const hashPassword = async (password: string) => {
	const salt = await genSalt(10);
	return hashSync(password, salt);
};

export const comparePassword = async (password: string, hash: string) => {
	return compare(password, hash);
};
