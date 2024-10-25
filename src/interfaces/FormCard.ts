export interface FormCardProps {
	id: number;
	title: string;
	likes: number;
	authorName: string;
	openModal: (id: number) => void;
	description?: string;
	imageUrl?: string;
}
