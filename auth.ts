import Credentials from "next-auth/providers/credentials";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { validateUser } from "@/validators/validateUser";
import { users } from "@/db/schemas/userSchema";
import NextAuth from "next-auth";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { v4 as uuid } from "uuid";
import { encode as defaultEncode } from "next-auth/jwt";

const adapter = DrizzleAdapter(db);

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: adapter,
	pages: {
		signIn: "/login",
	},
	providers: [
		Credentials({
			credentials: {
				email: {},
				password: {},
			},
			authorize: async (credentials) => {
				const validatedUser = validateUser.safeParse(credentials);

				if (!validatedUser.success) return null;

				const userExists = await db.query.users.findFirst({
					where: eq(users.email, validatedUser.data.email),
				});

				if (!userExists) return null;

				const user = {
					id: userExists.id.toString(),
					name: userExists.name,
					email: userExists.email,
					role: userExists.role,
				};

				return user;
			},
		}),
	],
	callbacks: {
		async jwt({ token, user, account }) {
			if (account?.provider === "credentials") {
				token.credentials = true;
			}
			return token;
		},
	},
	jwt: {
		encode: async (params) => {
			if (params.token?.credentials) {
				const sessionToken = uuid();

				if (!params.token.sub) throw new Error("No user ID found in token");

				const createdSession = await adapter?.createSession?.({
					sessionToken: sessionToken,
					userId: params.token.sub,
					expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
				});

				if (!createdSession) throw new Error("Failed to create session");

				return sessionToken;
			}
			return defaultEncode(params);
		},
	},
	secret: process.env.AUTH_SECRET ?? "",
	experimental: { enableWebAuthn: true },
});
