import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

interface ContactCardsProps {
	branch: string;
	address: string;
	image: string;
}

export const BranchCard = ({ address, image, branch }: ContactCardsProps) => {
	return (
		<Card className="rounded-xl cardShadow max-w-[370px] h-[390px]">
			<CardHeader className="pb-0 pt-2 px-2 w-full flex justify-center">
				<Image
					alt={branch}
					className="object-cover rounded-xl h-40 mt-4"
					width={140}
					height={140}
					src={image}
				/>
			</CardHeader>
			<CardBody className=" px-4">
				<h3 className="text-xl font-bold">{branch}</h3>
				<p className="font-semibold opacity-80 mt-2 mb-4 h-24 overflow-y-auto containerScrol">
					{address}
				</p>
				<Button radius="sm" className="bg-[#545CA4] text-white font-bold">
					Ver Dirección
				</Button>
			</CardBody>
		</Card>
	);
};
