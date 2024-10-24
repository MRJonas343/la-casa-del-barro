// next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
	interface User {
		id: string;
		name: string;
		email: string;
		role?: string;
		status?: string;
	}

	interface Session {
		user: User;
	}
}
