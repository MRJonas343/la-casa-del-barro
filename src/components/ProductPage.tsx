"use client";

import type { Product } from "@/interfaces/Product";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Button } from "@nextui-org/button";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { usePathname } from "next/navigation";
import { FaHeart } from "react-icons/fa";
import type { ContactContent } from "@/interfaces/ContactContent";
import { Link } from "@nextui-org/link";

export const ProductPage = ({
	products,
	data,
}: { products: Product[]; data: ContactContent }) => {
	const [activeProduct, setActiveProduct] = useState(products[0]);
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);
	const pathname = usePathname();
	const decodedPathname = decodeURIComponent(pathname);
	const title = decodedPathname.split("/")[1];

	const changeProduct = (product: Product) => {
		setActiveProduct(product);
	};

	return (
		<main className="min-h-[90dvh] mb-5 sm:mb-0">
			<div className="w-52 bg-[#D98E73] mx-auto mt-4 rounded-lg p-2 text-white shadow-md shadow-gray-900 lg:w-[650px] lg:mb-10 lg:py-4">
				<h1 className="text-center text-2xl md:text-3xl font-bold hover:bg-[#BFBFBF] hover:text-white lg:text-5xl">
					{title}
				</h1>
			</div>

			<div className="w-[90%] mx-auto justify-start max-w-[1200px] flex px-3 gap-3 py-4 my-3 overflow-x-auto whitespace-nowrap snap-x scrollbar">
				{products.map((product) => (
					<Card
						key={product.id}
						className="p-2 bg-[#F2E0D0] shadow-sm shadow-gray-900 hover:bg-[#BFBFBF] min-w-16 min-h-16 sm:min-w-20 sm:min-h-20 snap-start flex justify-center items-center"
						isPressable
						onPress={() => changeProduct(product)}
					>
						<Image
							alt={product.name}
							className="w-16 h-16 object-fill shadow-sm"
							src={product.image.url}
						/>
					</Card>
				))}
			</div>

			<article className="flex flex-col mx-auto rounded-xl mt-2 sm:hidden mb-8">
				<Card className="rounded-xl mx-auto shadow-md shadow-gray-600 w-[95%] bg-[#FAF3E0] pb-2">
					<CardHeader className="w-full flex justify-center h-44">
						<Image
							alt="Contactanos"
							className="rounded-xl outerShadow w-40 max-h-40 min-h-24 object-fill"
							src={activeProduct.image.url}
							onClick={() => setIsLightboxOpen(true)}
						/>
					</CardHeader>
					<CardBody className="px-4">
						<h3 className="text-xl font-bold">{activeProduct.name}</h3>
						<ScrollShadow className="h-44 font-semibold opacity-80 mt-2 mb-4">
							<BlocksRenderer content={activeProduct.description} />
						</ScrollShadow>
						<Button
							radius="sm"
							size="lg"
							className="bg-[#545CA4] text-white font-bold"
							endContent={<FaHeart />}
							as={Link}
							href={`https://wa.me/${data.phoneNumberWhatsApp}`}
						>
							Lo quiero
						</Button>
					</CardBody>
				</Card>
			</article>

			<section className="hidden w-[90%] mx-auto sm:flex mt-14 max-w-[1300px]">
				<div className="w-[40%] flex justify-center items-center p-2">
					<div
						className="p-8 rounded-2xl outerShadow hover:scale-105 ease-in duration-300"
						style={{
							backgroundImage: 'url("/images/wood.webp")',
							backgroundSize: "cover",
							backgroundPosition: "center",
							cursor: "pointer",
						}}
					>
						<Image
							src={activeProduct.image.url}
							alt={activeProduct.name}
							className="w-[250px] h-[250px] lg:h-[360px] lg:w-[360px] innerShadow  brightness-110"
							onClick={() => setIsLightboxOpen(true)}
						/>
					</div>
				</div>
				<article className="w-[60%] p-2 lg:px-5 lg:pt-3 lg:pb-6 ">
					<h2 className="font-bold text-2xl lg:text-6xl lg:mb-6">
						{activeProduct.name}
					</h2>

					<ScrollShadow className="h-44 max-w-[650px] font-semibold opacity-80 my-2 text-lg">
						<BlocksRenderer
							content={activeProduct.description}
							blocks={{
								list: ({ children }) => (
									<ul className="list-disc pl-5">{children}</ul>
								),
								"list-item": ({ children }) => (
									<li className="mb-1">{children}</li>
								),
								heading: ({ children, level }) => {
									switch (level) {
										case 1:
											return <h1 className="text-2xl font-bold">{children}</h1>;
										case 2:
											return <h2 className="text-xl font-bold">{children}</h2>;
										case 3:
											return <h3 className="text-lg font-bold">{children}</h3>;
										case 4:
											return (
												<h4 className="text-base font-bold">{children}</h4>
											);
										case 5:
											return <h5 className="text-sm font-bold">{children}</h5>;
										default:
											return <h6 className="text-xs font-bold">{children}</h6>;
									}
								},
							}}
						/>
					</ScrollShadow>

					<Button
						radius="sm"
						className="bg-[#545CA4] text-white font-bold mt-6 shadowButton w-72 text-lg lg:text-xl"
						variant="shadow"
						endContent={<FaHeart />}
						size="lg"
						as={Link}
						href={`https://wa.me/${data.phoneNumberWhatsApp}`}
					>
						Lo quiero
					</Button>
				</article>
			</section>

			{isLightboxOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
					onMouseDown={() => setIsLightboxOpen(false)}
				>
					<div onMouseDown={(e) => e.stopPropagation()}>
						<Image
							src={activeProduct.image.url}
							alt={activeProduct.name}
							className="max-w-[90dvh] w-[50dvw] max-h-[90dvh] rounded-lg shadow-lg"
						/>
						<Button
							variant="light"
							type="button"
							className="absolute top-4 right-4 text-white text-3xl"
							onClick={() => setIsLightboxOpen(false)}
						>
							&times;
						</Button>
					</div>
				</div>
			)}
		</main>
	);
};
