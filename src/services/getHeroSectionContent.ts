"use server";

import type { HeroContent } from "@/interfaces/HeroContent";

export const getHeroSectionContent = async (): Promise<HeroContent> => {
	const result = await fetch(`${process.env.STRAPI_BASE_URL}/hero-section`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.CMS_TOKEN}`,
		},
	});

	const content = await result.json();

	return content.data;
};
