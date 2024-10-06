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
import { signOut, useSession } from "next-auth/react";

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();
	const t = useTranslations("NavBar");
	const { data: session } = useSession();

	const handleLogOut = async () => {
		await signOut();
		if (typeof window !== "undefined") window.location.href = "/";
	};

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
				<NavbarItem
					className="hidden lg:flex font-semibold"
					isActive={pathname === "/login"}
				>
					{!session && (
						<Link
							href="/login"
							color={pathname === "/login" ? "primary" : "foreground"}
						>
							{t("login")}
						</Link>
					)}
					{session && `${t("welcome")} ${session.user?.name}`}
				</NavbarItem>
				<NavbarItem>
					<Button
						as={Link}
						color="primary"
						href={session ? "/my-forms" : "/register"}
						className="font-semibold"
						variant="shadow"
						radius="sm"
					>
						{session ? t("myForms") : t("join")}
					</Button>
				</NavbarItem>
				<Popover placement="bottom">
					<PopoverTrigger className="hidden sm:flex">
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
				<NavbarMenuItem isActive={pathname === "/login"}>
					<Link
						href="/login"
						color={pathname === "/login" ? "primary" : "foreground"}
					>
						{t("login")}
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem isActive={pathname === "/"}>
					<Link href="/" color={pathname === "/" ? "primary" : "foreground"}>
						{t("latest")}
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem isActive={pathname === "/popular-forms"}>
					<Link
						href="/popular-forms"
						color={pathname === "/popular-forms" ? "primary" : "foreground"}
					>
						{t("popular")}
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Button
						className="pb-2 bg-transparent px-0 text-red-700 font-medium text-medium"
						onClick={() => handleLogOut()}
					>
						{t("logOut")}
					</Button>
					<LanguageSelect />
				</NavbarMenuItem>
				<SwitchTheme size="lg" />
			</NavbarMenu>
		</Navbar>
	);
};
export default NavBar;
