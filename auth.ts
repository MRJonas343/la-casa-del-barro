import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Credentials({
			credentials: {
				email: {},
				password: {},
			},
			authorize: async (credentials) => {
				let user = null;
				console.log(credentials);

				user = {
					id: "1",
					name: "John Doe",
					email: "john@doe.com",
				};

				if (!user) return null;

				return user;
			},
		}),
	],
});
