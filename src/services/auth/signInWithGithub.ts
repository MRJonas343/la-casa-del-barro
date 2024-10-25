"use server";

import { redirect } from "next/navigation";
import { signIn } from "@/auth";

export const signInWithGithub = async () => {
	await signIn("github");
	return redirect("/dashboard");
};
