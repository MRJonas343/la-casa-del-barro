import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa6";

interface ContactCardsProps {
	phoneNumber: string;
	phoneNumberWhatsApp: string;
	email: string;
}

export const ContactCard = ({
	phoneNumber,
	phoneNumberWhatsApp,
	email,
}: ContactCardsProps) => {
	return (
		<Card className="rounded-xl cardShadow max-w-[370px] h-[390px]">
			<CardHeader className="pb-0 pt-2 w-full flex justify-center">
				<Image
					alt="Contactanos"
					className="object-cover rounded-xl h-40 mt-4 translate-x-3"
					width={140}
					height={140}
					src="/images/support.png"
				/>
			</CardHeader>
			<CardBody className="px-4">
				<h3 className="text-xl font-bold">Contactanos</h3>
				<div className="flex items-center font-semibold opacity-80 mt-2 h-8 overflow-y-auto containerScrol">
					<FaPhoneVolume size={20} />

					<p className="pl-2"> {phoneNumber}</p>
				</div>
				<div className="flex items-center font-semibold opacity-80 mb-4 h-16  overflow-y-auto containerScrol">
					<FaWhatsapp size={25} />
					<p className="pl-2"> {phoneNumberWhatsApp}</p>
				</div>
				<Button radius="sm" className="bg-[#545CA4] text-white font-bold">
					{email}
				</Button>
			</CardBody>
		</Card>
	);
};
