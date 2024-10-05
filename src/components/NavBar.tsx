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
	Popover,
	PopoverTrigger,
	PopoverContent,
} from "@nextui-org/react";
import { useState } from "react";
import FormMasterLogo from "./FormMasterLogo";
import { SwitchTheme } from "./SwitchTheme";
import { usePathname } from "next/navigation";
import { IoSettingsOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";
import LanguageSelect from "./LanguageSelect";

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();
	const t = useTranslations("NavBar");

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
						{t("latest")}
					</Link>
				</NavbarItem>
				<NavbarItem isActive={pathname === "/popular-forms"}>
					<Link
						color={pathname === "/popular-forms" ? "primary" : "foreground"}
						href="/popular-forms"
						aria-current="page"
					>
						{t("popular")}
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
				<Popover placement="bottom">
					<PopoverTrigger>
						<Button isIconOnly className="bg-transparent">
							<IoSettingsOutline size={30} />
						</Button>
					</PopoverTrigger>
					<PopoverContent>
						<div className="px-1 py-2 flex items-center gap-2">
							<SwitchTheme size="lg" />
							<LanguageSelect />
						</div>
					</PopoverContent>
				</Popover>
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
