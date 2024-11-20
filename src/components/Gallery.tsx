"use client";

import Masonry from "react-responsive-masonry";
import { ResponsiveMasonry } from "react-responsive-masonry";

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
		<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
			<Masonry gutter="16px">
				{images.map((image) => (
					<img
						key={image.id}
						src={image.src}
						alt={image.alt}
						className="rounded-xl"
					/>
				))}
			</Masonry>
		</ResponsiveMasonry>
	);
};
export default Gallery;
