import Credentials from "next-auth/providers/credentials";
import { encode as defaultEncode } from "next-auth/jwt";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { validateUser } from "@/validators";
import { v4 as uuid } from "uuid";
import NextAuth from "next-auth";
import Passkey from "next-auth/providers/passkey";
import { db } from "@/db";

const adapter = DrizzleAdapter(db);

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: adapter,
	pages: {
		signIn: "/login",
	},
	providers: [
		Credentials({
			credentials: {
				id: {},
				email: {},
				password: {},
			},
			authorize: async (credentials) => {
				const validatedUser = validateUser.safeParse(credentials);

				if (!validatedUser.success) return null;

				const user = {
					id: validatedUser.data.id,
					name: validatedUser.data.name,
					email: validatedUser.data.email,
					role: validatedUser.data.role,
				};

				return user;
			},
		}),
		Passkey,
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
					expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
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
