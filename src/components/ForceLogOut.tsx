"use client";

import { signOut } from "next-auth/react";
import { useEffect } from "react";

export const ForceLogOut = () => {
	const signout = async () => {
		await signOut();
	};

	useEffect(() => {
		signout();
	}, []);

	return <div />;
};
