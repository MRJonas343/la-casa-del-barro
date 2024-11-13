import type { Metadata } from "next";

export const mainPageMetaData: Metadata = {
	title: "La Casa del Barro - Artesanías Únicas en Barro y Talavera",
	description:
		"La Casa del Barro ofrece una amplia variedad de artesanías de barro y talavera auténticas, creadas a mano por talentosos artesanos. Descubre nuestra colección de productos únicos que combinan tradición y calidad para dar un toque especial a cualquier espacio.",
	keywords: [
		"artesanías de barro",
		"talavera",
		"La Casa del Barro",
		"productos de barro",
		"artesanías mexicanas",
		"decoración artesanal",
	],
	openGraph: {
		title: "La Casa del Barro - Artesanías Únicas en Barro y Talavera",
		description:
			"Descubre auténticas artesanías de barro y talavera en La Casa del Barro. Productos únicos que combinan tradición y calidad.",
		url: "https://lacasadelbarro.com",
		type: "website",
		images: [
			{
				url: "https://lacasadelbarro.com/images/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Artesanías de barro y talavera - La Casa del Barro",
			},
		],
		locale: "es_MX",
	},
	twitter: {
		card: "summary_large_image",
		site: "@lacasadelbarro",
		title: "La Casa del Barro - Artesanías Únicas en Barro y Talavera",
		description:
			"Descubre auténticas artesanías de barro y talavera en La Casa del Barro. Productos únicos que combinan tradición y calidad.",
		images: ["https://lacasadelbarro.com/images/twitter-image.jpg"],
	},
	robots: {
		index: true,
		follow: true,
	},
};
