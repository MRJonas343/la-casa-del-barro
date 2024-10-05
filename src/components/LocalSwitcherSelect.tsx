"use client";

import { useTransition } from "react";
import type { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/local";
import { Select, SelectItem } from "@nextui-org/react";

export interface LocalSwitcherSelectProps {
	defaultValue: string;
	items: Array<{ value: string; label: string }>;
	label: string;
}

export default function LocalSwitcherSelect({
	defaultValue,
	items,
	label,
}: LocalSwitcherSelectProps) {
	const [isPending, startTransition] = useTransition();

	const handleLocaleChange = (locale: string) => {
		startTransition(() => {
			setUserLocale(locale as Locale);
		});
	};

	return (
		<Select
			radius="sm"
			variant="faded"
			aria-label={label}
			defaultSelectedKeys={[defaultValue]}
			className="w-28"
			onChange={(e) => handleLocaleChange(e.target.value)}
		>
			<SelectItem key="en" value={items[0].value}>
				{items[0].label}
			</SelectItem>
			<SelectItem key="es" value={items[1].value}>
				{items[1].label}
			</SelectItem>
		</Select>
	);
}
