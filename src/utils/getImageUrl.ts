import { isImageValid } from "@/validators";
import { uploadImage } from ".";

export const getImageUrl = async (imageInForm: FormData | undefined) => {
	let imageUrl = process.env.DEFAULT_IMAGE_URL ?? "";

	if (imageInForm?.has("image")) {
		const image = imageInForm.get("image") as File;
		const isImageCorrect = isImageValid(image);

		if (!isImageCorrect) return imageUrl;

		imageUrl = await uploadImage(image);
	}

	return imageUrl;
};
