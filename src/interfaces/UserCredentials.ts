export interface UserCredentials {
	email: string;
	password: string;
}

export interface User {
	name: string;
	email: string;
	password?: string;
	hashedPassword?: string;
	role?: "admin" | "user";
	status?: "active" | "blocked";
}

export interface UsersSeed {
	name: string;
	email: string;
	password: string;
	role?: "admin" | "user";
	status?: "active" | "blocked";
}
