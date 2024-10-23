"use server";

import { db } from "@/db";
import { forms } from "@/db/schemas";
import type { FormSettingsType } from "@/interfaces";
import { eq } from "drizzle-orm";

type FormSettingPartial = Partial<FormSettingsType>;

export const updateFormSetting = async (
	formId: number,
	data: FormSettingPartial,
	imageInForm?: FormData,
) => {
	console.log(data);
	console.log(imageInForm);
	console.log(formId);
	if (imageInForm?.has("image")) {
		//update the imagen then
		//you know, delete the old image and upload the new one
		console.log("update the imagen then");
	}
	//const result = await db.update(forms).set(data).where(eq(forms.id, formId));
};
