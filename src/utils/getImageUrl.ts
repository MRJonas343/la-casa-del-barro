import { isImageValid } from "@/validators";
import { uploadImage } from "./uploadImage";
import "dotenv/config";

export const getImageUrl = async (
	imageInForm: FormData | undefined,
	userId: number,
	formTitle: string,
) => {
	let imageUrl = process.env.DEFAULT_IMAGE_URL ?? "";

	if (imageInForm?.has("image")) {
		const image = imageInForm.get("image") as File;
		const isImageCorrect = isImageValid(image);

		if (!isImageCorrect) imageUrl;

		const formatedTitle = formTitle.replaceAll(" ", "-");

		imageUrl = await uploadImage(image, userId, formatedTitle);
	}
	return imageUrl;
};
