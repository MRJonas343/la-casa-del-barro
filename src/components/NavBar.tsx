import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { FaArrowRight } from "react-icons/fa";

export const NavBar = () => {
	const menuItems = ["Materiales", "Artesanias", "Galeria", "Contactanos"];

	return (
		<Navbar
			maxWidth="full"
			className="bg-[#CFEEFB] font-bold"
			position="static"
		>
			<NavbarContent>
				<NavbarBrand className="-translate-x-4  sm:-translate-x-0">
					<Image
						className="w-10 p-1 lg:w-14 lg:mt-4"
						src="/images/logo.png"
						alt="La Casa Del Barro Logo"
					/>
					<Link
						href="/"
						className="font-bold text-[#545CA4] cursor-pointer text-xs lg:text-lg lg:mt-7"
					>
						La casa del
						<br />
						barro
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link color="foreground" href="#">
						Materiales
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link href="#" aria-current="page">
						Artesanias
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Galleria
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<Button
						as={Link}
						radius="sm"
						href="#"
						variant="flat"
						className="bg-[#545CA4] text-white font-bold text-xs sm:text-sm translate-x-3 sm:translate-x-0"
						endContent={<FaArrowRight className="text-sm sm:text-lg" />}
					>
						Contactanos
					</Button>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem
						key={`${item}-${
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							index
						}`}
					>
						<Link
							color={
								index === 2
									? "primary"
									: index === menuItems.length - 1
										? "danger"
										: "foreground"
							}
							className="w-full"
							href="#"
							size="lg"
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
};
