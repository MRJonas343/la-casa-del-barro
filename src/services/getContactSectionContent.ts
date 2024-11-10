"use server";

import type { ContactContent } from "@/interfaces/ContactContent";

export const getContactSectionContent = async (): Promise<ContactContent> => {
	const result = await fetch(`${process.env.STRAPI_BASE_URL}/contact`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.CMS_TOKEN}`,
		},
	});

	const content = await result.json();

	return content.data;
};
