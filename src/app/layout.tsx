import { poppinsFont } from "@/app/fonts/font";
import { Providers } from "./providers";
import "./globals.css";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body
				className={`antialiased overflow-x-hidden bg-[#FFF8E1] min-h-screen ${poppinsFont.className} pb-10`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
