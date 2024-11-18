import { poppinsFont } from "@/app/fonts/font";
import { Providers } from "./providers";
import { NavBar } from "@/components";
import Footer from "@/components/Footer";
import "./globals.css";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body
				className={`antialiased overflow-x-hidden bg-[#FFF8E1] min-h-screen ${poppinsFont.className}`}
			>
				<Providers>
					<NavBar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
