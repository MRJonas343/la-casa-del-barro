import { getProducts } from "@/services/getProducts";
import { ProductPage } from "@/components/ProductPage";

export default async function page(props: { params: Promise<{ category: string }> }) {
    const params = await props.params;
    const products = await getProducts(params.category);
    console.log(products);

    return (
		<>
			<ProductPage products={products} />
		</>
	);
}
