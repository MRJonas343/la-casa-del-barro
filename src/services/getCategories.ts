"use server";

import type { Category } from "@/interfaces/category";

export const getCategories = async (): Promise<Category[]> => {
	const result = await fetch(
		`${process.env.STRAPI_BASE_URL}/categories?fields[0]=id&fields[1]=name&fields[2]=slug&fields[3]=description&populate[image][fields][0]=url`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.CMS_TOKEN}`,
			},
		},
	);

	const content = await result.json();

	return content.data;
};
