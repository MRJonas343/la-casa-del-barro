"use server";
import type { Product } from "@/interfaces/Product";

export const getProducts = async (category: string): Promise<Product[]> => {
	const result = await fetch(
		`${process.env.STRAPI_BASE_URL}/products?filters[category_product][name][$eq]=${category}&populate=*`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.CMS_TOKEN}`,
			},
		},
	);
	const data = await result.json();

	return data.data;
};
