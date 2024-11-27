import { poppinsFont } from "@/app/fonts/font";
import { Providers } from "./providers";
import { NavBar } from "@/components";
import Footer from "@/components/Footer";
import "./globals.css";
import { getContactSectionContent } from "@/services/getContactSectionContent";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const data = await getContactSectionContent();

	return (
		<html lang="es">
			<body
				className={`antialiased overflow-x-hidden bg-[#FFF8E1] min-h-screen ${poppinsFont.className}`}
			>
				<Providers>
					<NavBar data={data} />
					{children}
					<Footer data={data} />
				</Providers>
			</body>
		</html>
	);
}
