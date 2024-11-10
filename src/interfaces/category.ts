export interface Image {
	id: number;
	documentId: string;
	name: string;
	alternativeText: string | null;
	caption: string | null;
	width: number;
	height: number;
	formats: unknown;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string | null;
	provider: string;
	provider_metadata: null;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

export interface Category {
	id: number;
	documentId: string;
	name: string;
	slug: string;
	description: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	image: Image;
}
