import { getProducts } from "@/services/getProducts";
import { NavBar } from "@/components";
import { Divider } from "@nextui-org/divider";
import { ProductPage } from "@/components/ProductPage";

export default async function page({
	params,
}: { params: { category: string } }) {
	const products = await getProducts(params.category);

	return (
		<>
			<NavBar />
			<Divider className="bg-[#545CA4] mt-5 h-1 opacity-60" />
			<ProductPage products={products} />
		</>
	);
}
