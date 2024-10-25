export interface FormCardProps {
	id: number;
	title: string;
	likes: number;
	authorName: string;

	description?: string;
	imageUrl?: string;
}

export interface FormCardPropsWithModal {
	id: number;
	title: string;
	likes: number;
	authorName: string;
	openModal: (id: number) => void;
	description?: string;
	imageUrl?: string;
}
