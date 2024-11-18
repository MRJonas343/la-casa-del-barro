import { getProducts } from "@/services/getProducts";
import { NavBar } from "@/components";
import { ProductPage } from "@/components/ProductPage";

export default async function page({
	params,
}: { params: { category: string } }) {
	const products = await getProducts(params.category);

	return <ProductPage products={products} />;
}
