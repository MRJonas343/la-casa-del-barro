import { PutObjectCommand } from "@aws-sdk/client-s3";
import { R2 } from "@/config";
import "dotenv/config";

export const uploadImage = async (
	file: File,
	userId: number,
	title: string,
) => {
	const arrayBuffer = await file.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer);

	const uploadParams = {
		Bucket: process.env.R2_BUCKET_NAME || "",
		Key: `${userId}-${title}.png`,
		ContentType: file.type,
		Body: buffer,
	};

	await R2.send(new PutObjectCommand(uploadParams));

	return `${process.env.IMAGE_BASE_URL}${uploadParams.Key}`;
};
