"use client";

import MasonryFC from "@wowblvck/react-responsive-masonry";
import { Image } from "@nextui-org/image";
interface GalleryProps {
	images: Images[];
}

interface Images {
	id: number;
	src: string;
	alt: string;
}

const Gallery = ({ images }: GalleryProps) => {
	return (
		<MasonryFC gutter="16px">
			{images.map((image) => (
				<Image
					key={image.id}
					src={image.src}
					alt={image.alt}
					radius="lg"
					isZoomed
				/>
			))}
		</MasonryFC>
	);
};
export default Gallery;
