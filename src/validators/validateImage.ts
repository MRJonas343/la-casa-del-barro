export const isImageValid = (file: File) => {
	if (
		file.type !== "image/png" &&
		file.type !== "image/jpeg" &&
		file.type !== "image/jpg"
	) {
		return false;
	}
	//5MB
	if (file.size > 5 * 1024 * 1024) {
		return false;
	}
	return true;
};
