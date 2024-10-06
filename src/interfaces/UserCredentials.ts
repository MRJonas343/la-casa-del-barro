export interface UserCredentials {
	email: string;
	password: string;
}

export interface User {
	name: string;
	email: string;
	password: string;
	role?: "admin" | "user";
}
