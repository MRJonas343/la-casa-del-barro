"use server";

import type { FormCardProps } from "@/interfaces";
import { formRepository } from "@/repositories";

export const getFormsWithFullTextSearch = async (search: string) => {
	if (search === "") return [];
	const forms = await formRepository.findFormsWithFullTextSearch(search);

	return forms as unknown as FormCardProps[];
};
