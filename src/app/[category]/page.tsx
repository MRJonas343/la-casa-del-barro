import { getProducts } from "@/services/getProducts";
import { ProductPage } from "@/components/ProductPage";
import { getContactSectionContent } from "@/services/getContactSectionContent";

export default async function page(props: {
	params: Promise<{ category: string }>;
}) {
	const params = await props.params;
	const [products, data] = await Promise.all([
		getProducts(params.category),
		getContactSectionContent(),
	]);

	return <ProductPage products={products} data={data} />;
}
