"use client";

import {
	Button,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Link,
} from "@nextui-org/react";
import { useState } from "react";
import FormMasterLogo from "./FormMasterLogo";
import { SwitchTheme } from "./SwitchTheme";
import { usePathname } from "next/navigation";

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	return (
		<Navbar isBordered onMenuOpenChange={setIsMenuOpen} maxWidth="xl">
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<FormMasterLogo className="hidden md:block" />
					<Link href="/" className="font-bold text-inherit pl-3 cursor-pointer">
						Form Master
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem isActive={pathname === "/"}>
					<Link
						color={pathname === "/" ? "primary" : "foreground"}
						href="/"
						aria-current="page"
					>
						Latest
					</Link>
				</NavbarItem>
				<NavbarItem isActive={pathname === "/popular-forms"}>
					<Link
						color={pathname === "/popular-forms" ? "primary" : "foreground"}
						href="/popular-forms"
						aria-current="page"
					>
						Popular
					</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify="end">
				<NavbarItem className="hidden md:flex">
					<Link className="font-semibold text-inherit" href="#">
						Login
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Button
						as={Link}
						color="primary"
						href="#"
						className="font-semibold"
						variant="shadow"
						radius="sm"
					>
						Join Now
					</Button>
				</NavbarItem>

				<NavbarItem className="hidden sm:flex">
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
