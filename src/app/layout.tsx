import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { SessionProvider } from "next-auth/react";
import type { Metadata } from "next";
import { poppinsFont } from "@/fonts/font";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
	title: "FormMaster",
	description:
		"FormMaster is a platform that allows you to create, manage, and share forms.",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();

	const messages = await getMessages();

	return (
		<SessionProvider>
			<html lang={locale} className="light text-foreground bg-background">
				<body
					className={`${poppinsFont.className} antialiased text-black dark:text-white`}
				>
					<NextIntlClientProvider messages={messages}>
						<Providers>{children}</Providers>
					</NextIntlClientProvider>
				</body>
			</html>
		</SessionProvider>
	);
}
