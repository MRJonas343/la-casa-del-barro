import { getProducts } from "@/services/getProducts";
import { ProductPage } from "@/components/ProductPage";

export default async function page({
	params,
}: { params: { category: string } }) {
	const products = await getProducts(params.category);
	console.log(products);

	return <ProductPage products={products} />;
}
