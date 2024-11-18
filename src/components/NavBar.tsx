import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { FaArrowRight } from "react-icons/fa";

export const NavBar = () => {
	return (
		<Navbar
			maxWidth="full"
			className="bg-[#FFF8E1] font-bold"
			position="static"
		>
			<NavbarContent>
				<NavbarBrand className="-translate-x-4  sm:-translate-x-0">
					<Image
						className="w-10 p-1 lg:w-12 lg:mt-4"
						src="/images/logo.png"
						alt="La Casa Del Barro Logo"
					/>
					<Link
						href="/"
						className="font-bold text-[#545CA4] cursor-pointer text-xs lg:text-lg lg:mt-5"
					>
						La casa del
						<br />
						barro
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link color="foreground" href="/#categorias">
						Materiales
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link aria-current="page" color="foreground" href="/Artesanías">
						Artesanias
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="/gallery">
						Galleria
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<Button
						as={Link}
						radius="sm"
						href="/#contacto"
						variant="flat"
						className="bg-[#545CA4] text-white font-bold text-xs sm:text-sm translate-x-3 sm:translate-x-0 shadowButton"
						endContent={<FaArrowRight className="text-sm sm:text-lg " />}
					>
						Contactanos
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};
