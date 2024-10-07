import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { SessionProvider } from "next-auth/react";
import { poppinsFont } from "@/fonts/font";
import { Snackbar } from "@/components";
import { Providers } from "./providers";
import "./globals.css";

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
						<Providers>
							{children}
							<Snackbar />
						</Providers>
					</NextIntlClientProvider>
				</body>
			</html>
		</SessionProvider>
	);
}
