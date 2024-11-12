"use client";

import type { Product } from "@/interfaces/Product";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Button, ScrollShadow } from "@nextui-org/react";

import { FaHeart } from "react-icons/fa";

export const ProductPage = ({ products }: { products: Product[] }) => {
	const [activeProduct, setActiveProduct] = useState(products[0]);
	const changeProduct = (product: Product) => {
		setActiveProduct(product);
	};

	return (
		<>
			<div className="w-[95%] mx-auto justify-start max-w-[1250px] flex px-3 gap-3 py-2 overflow-x-auto whitespace-nowrap snap-x">
				{products.map((product) => (
					<Card
						key={product.id}
						className="p-2 bg-[#F2E0D0] cardShadow hover:bg-[#BFBFBF] min-w-16 min-h-16 snap-start flex justify-center items-center"
						isPressable
						onPress={() => changeProduct(product)}
					>
						<Image
							alt={product.name}
							className="w-14 h-14 object-fill"
							src={product.image.url}
						/>
					</Card>
				))}
			</div>

			<div className="flex flex-col w-[90%] mx-auto rounded-xl mt-8 ">
				<Card className="rounded-xl cardShadow max-w-[370px] h-[390px] bg-[#FAF3E0]">
					<CardHeader className="pb-0 pt-2 w-full flex justify-center">
						<Image
							alt="Contactanos"
							className="rounded-xl h-40 mt-4 translate-x-3 w-48"
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
		</>
	);
};
