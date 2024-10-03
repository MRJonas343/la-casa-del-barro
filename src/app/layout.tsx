import type { Metadata } from "next";
import { poppinsFont } from "@/fonts/font";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
	title: "FormMaster",
	description:
		"FormMaster is a platform that allows you to create, manage, and share forms.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="light text-foreground bg-background">
			<body
				className={`${poppinsFont.className} antialiased text-black dark:text-white`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
