"use client";

import { Toaster } from "react-hot-toast";
import { useTheme } from "next-themes";

export const Snackbar = () => {
	const { theme } = useTheme();

	return (
		<Toaster
			position="bottom-left"
			toastOptions={{
				className: "font-semibold",
				style: {
					background: theme === "dark" ? "#1a1a1a" : "#ffffff",
					color: theme === "dark" ? "#ffffff" : "#1a1a1a",
				},
			}}
		/>
	);
};
