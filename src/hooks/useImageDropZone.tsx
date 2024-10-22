import type { Action } from "@/app/dashboard/store/generalSettingsState";
import { useDropzone } from "react-dropzone";

interface UseImageDropzoneProps {
	dispatch: (value: Action) => void;
}

export const useImageDropzone = ({ dispatch }: UseImageDropzoneProps) => {
	const { getRootProps, getInputProps } = useDropzone({
		maxFiles: 1,
		accept: {
			"image/*": [".png", ".jpg", ".jpeg", ".webp"],
		},
		onDrop: (acceptedFiles) => {
			dispatch({ type: "SET_IMAGE", payload: acceptedFiles[0] });
		},
	});

	return { getRootProps, getInputProps };
};
