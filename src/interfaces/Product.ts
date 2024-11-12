import type { BlocksContent } from "@strapi/blocks-react-renderer";

export interface Product {
	id: number;
	documentId: string;
	name: string;
	slug: string;
	isActive: boolean;
	stock: number;
	description: BlocksContent;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
	image: ProductImage;
}

export interface ProductImage {
	url: string;
}
