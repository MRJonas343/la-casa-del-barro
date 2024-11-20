import { getGalleryItems } from "@/services/getGalleryItemst";
import Gallery from "@/components/Gallery";

const page = async () => {
	const products = await getGalleryItems();

	const images = products.map((product) => ({
		id: product.id,
		src: product.image.url,
		alt: product.name,
	}));

	return (
		<div className="min-h-screen mb-20 w-full sm:w-[95%] mx-auto">
			<h1 className="text-center mt-6 mb-2 text-xl sm:text-2xl md:text-5xl font-semibold">
				Galería
			</h1>
			<p className="font-semibold opacity-80 text-center md:my-5 my-2 mb-4 md:text-lg">
				Descubre nuestra colección de productos únicos
			</p>
			<Gallery images={images} />
		</div>
	);
};
export default page;
