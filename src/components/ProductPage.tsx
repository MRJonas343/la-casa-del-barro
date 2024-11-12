"use client";

import type { Product } from "@/interfaces/Product";
import { Card } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Button } from "@nextui-org/react";

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
						className="p-2 bg-[#D9D9D9] cardShadow hover:bg-[#BFBFBF]  min-w-20 min-h-20 snap-start flex justify-center items-center"
						isPressable
						onPress={() => changeProduct(product)}
					>
						<Image
							alt={product.name}
							className="w-16 h-16 object-fill"
							src={product.image.url}
						/>
					</Card>
				))}
			</div>

			<div className="flex flex-col w-[95%] mx-auto mt-5 justify-center">
				<div className="w-[80%] mx-auto bg-[#BFBFBF]  rounded-xl p-4 shadow-2xl flex justify-center">
					<Image
						alt={activeProduct.name}
						className="w-[300px] object-fill"
						src={activeProduct.image.url}
						width={300}
						height={250}
					/>
				</div>
				<p className="text-2xl font-bold text-center mb-2 mt-4">
					{activeProduct.name}
				</p>
				<div className="mx-4 mb-5 font-semibold opacity-80">
					<BlocksRenderer content={activeProduct.description} />
				</div>
				<Button radius="sm" className="bg-[#545CA4] text-white font-bold mx-3">
					Pregunta por este producto
				</Button>
			</div>
		</>
	);
};
