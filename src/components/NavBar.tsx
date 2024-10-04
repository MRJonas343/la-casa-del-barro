"use client";

import {
	Button,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";
import FormMasterLogo from "./FormMasterLogo";
import { navBarMenuItems } from "@/constants/NavBarMenuItems";
import { SwitchTheme } from "./SwitchTheme";

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl">
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<FormMasterLogo className="hidden md:block" />
					<p className="font-bold text-inherit pl-3">Form Master</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem isActive>
					<Link href="#">Latest</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#" aria-current="page">
						Popular
					</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Link className="font-semibold text-inherit" href="#">
						Login
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Button
						as={Link}
						color="primary"
						href="#"
						className=""
						variant="shadow"
						radius="sm"
					>
						Join Now
					</Button>
				</NavbarItem>

				<NavbarItem className="hidden lg:flex">
					<SwitchTheme size="lg" />
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{navBarMenuItems.map((item, index) => (
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
									: index === navBarMenuItems.length - 1
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
export default NavBar;
