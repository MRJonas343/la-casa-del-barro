"use server";

import { signIn } from "../../../auth";

export const authorize = async (email: string, password: string) => {
	try {
		await signIn("credentials", {
			email,
			password,
			redirect: false,
		});

		return "SUCCESS";
	} catch (error) {
		// biome-ignore lint/suspicious/noExplicitAny: <Need Flexibility>
		if ((error as any).type === "CredentialsSignin") {
			return "ERRORLOGIN";
		}

		return "CREDENTIALSERROR";
	}
};
