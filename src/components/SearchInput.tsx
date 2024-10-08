import { Input } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import { useTranslations } from "next-intl";
import type { FC } from "react";

export interface SearchInputProps {
	placeholder?: string;
	size?: "sm" | "md" | "lg";
	classname?: string;
}

export const SearchInput: FC<SearchInputProps> = ({
	placeholder,
	size,
	classname,
}) => {
	const t = useTranslations("SearchBar");

	return (
		<Input
			radius="sm"
			size={size ?? "sm"}
			endContent={<FaSearch />}
			placeholder={placeholder ?? t("search")}
			className={classname ?? "mx-5 lg:w-80"}
			variant="bordered"
		/>
	);
};
