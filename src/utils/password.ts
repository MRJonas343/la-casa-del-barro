import bcrypt from "bcrypt";

export const hashPassword = async (password: string) => {
	const salt = await bcrypt.genSalt(10);
	return bcrypt.hashSync(password, salt);
};

export const comparePassword = async (password: string, hash: string) => {
	return bcrypt.compare(password, hash);
};
