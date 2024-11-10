import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

interface CategoryCardProps {
	image: string;
	title: string;
	description: string;
	path: string;
}

const CategoryCard = ({
	image,
	title,
	description,
	path,
}: CategoryCardProps) => {
	return (
		<Card className="rounded-xl cardShadow max-w-[370px] h-[390px]">
			<CardHeader className="pb-0 pt-2 px-2 w-full flex justify-center">
				<Image
					alt={title}
					className="object-cover rounded-xl h-40"
					isZoomed
					isBlurred
					width={600}
					src={image}
				/>
			</CardHeader>
			<CardBody className=" px-4">
				<h3 className="text-xl font-bold">{title}</h3>
				<p className="font-semibold opacity-80 mt-2 mb-4 h-24 overflow-y-auto containerScrol">
					{description}
				</p>
				<Button radius="sm" className="bg-[#545CA4] text-white font-bold">
					Ver Catálogo
				</Button>
			</CardBody>
		</Card>
	);
};
export default CategoryCard;
