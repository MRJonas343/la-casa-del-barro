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
import { SwitchTheme } from "./SwitchTheme";

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<Navbar isBordered onMenuOpenChange={setIsMenuOpen} maxWidth="xl">
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
				<NavbarMenuItem>
					<Link color="foreground">Login</Link>
				</NavbarMenuItem>
				<NavbarMenuItem isActive>
					<Link color="primary">Latest</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link color="foreground">Popular</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link color="danger">Log Out</Link>
				</NavbarMenuItem>
				<SwitchTheme />
			</NavbarMenu>
		</Navbar>
	);
};
export default NavBar;
