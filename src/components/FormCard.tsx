import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { FcLike } from "react-icons/fc";
import type { FormCardProps } from "@/interfaces/FormCard";
import type { FC } from "react";

export const FormCard: FC<FormCardProps> = ({
	id,
	title,
	author,
	likes,
	imageUrl,
}) => {
	return (
		<Card className=" sm:max-w-[250px] sm:min-h-[320px] mb-8">
			<CardHeader className="flex justify-center">
				<Image
					className="h-[160px] md:h-[150px]"
					isBlurred
					src="https://nextui.org/images/hero-card-complete.jpeg"
					alt="Cloud Tags"
					width={270}
					height={150}
				/>
			</CardHeader>
			<CardBody className="px-6">
				<h3 className="pb-3 min-h-14">{title}</h3>
				<span className="text-sm pb-2 opacity-60">By {author}</span>
				<div className="flex items-center w-full justify-between">
					<div className="flex items-center gap-3">
						<FcLike size={25} />
						<span>{likes}</span>
					</div>
					<Button radius="sm" variant="flat" color="primary" className="">
						Answer
					</Button>
				</div>
			</CardBody>
		</Card>
	);
};
