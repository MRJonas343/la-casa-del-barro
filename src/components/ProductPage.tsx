"use client";

import type { Product } from "@/interfaces/Product";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Button, ScrollShadow } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { FaHeart } from "react-icons/fa";

export const ProductPage = ({ products }: { products: Product[] }) => {
	const [activeProduct, setActiveProduct] = useState(products[0]);
	const changeProduct = (product: Product) => {
		setActiveProduct(product);
	};

	const pathname = usePathname();
	const decodedPathname = decodeURIComponent(pathname);
	const title = decodedPathname.split("/")[1];

	return (
		<>
			<div className="w-52 bg-[#D98E73] mx-auto mt-4 rounded-xl p-2 text-white shadow-md shadow-gray-900">
				<h1 className="text-center text-2xl md:text-3xl font-bold hover:bg-[#BFBFBF] hover:text-white">
					{title}
				</h1>
			</div>

			<div className="w-[95%] mx-auto justify-start max-w-[1250px] flex px-3 gap-3 py-4 overflow-x-auto whitespace-nowrap snap-x">
				{products.map((product) => (
					<Card
						key={product.id}
						className="p-2 bg-[#F2E0D0] shadow-sm shadow-gray-900 hover:bg-[#BFBFBF] min-w-16 min-h-16 snap-start flex justify-center items-center"
						isPressable
						onPress={() => changeProduct(product)}
					>
						<Image
							alt={product.name}
							className="w-14 h-14 object-fill shadow-sm"
							src={product.image.url}
						/>
					</Card>
				))}
			</div>

			<div className="flex flex-col w-[90%] mx-auto rounded-xl mt-2 sm:hidden">
				<Card className="rounded-xl mx-auto shadow-md shadow-gray-600 max-w-[370px] h-[390px] bg-[#FAF3E0]">
					<CardHeader className="pb-0 pt-2 w-full flex justify-center">
						<Image
							alt="Contactanos"
							className="rounded-xl h-40 mt-4 translate-x-3 w-48 shadowItem"
							width={140}
							height={140}
							src={activeProduct.image.url}
						/>
					</CardHeader>
					<CardBody className=" px-4">
						<h3 className="text-xl font-bold">{activeProduct.name}</h3>
						<ScrollShadow className=" h-24 font-semibold opacity-80 mt-2 mb-4">
							<BlocksRenderer content={activeProduct.description} />
						</ScrollShadow>
						<Button
							radius="sm"
							className="bg-[#545CA4] text-white font-bold"
							endContent={<FaHeart />}
						>
							Lo quiero
						</Button>
					</CardBody>
				</Card>
			</div>

			<section className="hidden w-[90%] mx-auto sm:flex mt-20">
				<div className="w-[40%] flex justify-center items-center p-2">
					<Image
						src={activeProduct.image.url}
						alt="Product"
						className="w-[250px] h-[250px] shadow-md shadow-gray-900  hover:scale-110 hover:rotate-12 transition-transform duration-500 ease-in-out"
					/>
				</div>
				<div className="w-[60%] p-2">
					<h2 className="font-bold text-2xl">{activeProduct.name}</h2>
					<div className="my-2 font-semibold	opacity-80">
						<BlocksRenderer content={activeProduct.description} />
					</div>
					<Button
						radius="sm"
						className="bg-[#545CA4] text-white font-bold mt-6"
						endContent={<FaHeart />}
						size="lg"
					>
						Lo quiero
					</Button>
				</div>
			</section>
		</>
	);
};
