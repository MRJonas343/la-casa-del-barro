import { Input } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import { useTranslations } from "next-intl";

export const SearchInput = () => {
	const t = useTranslations("SearchBar");

	return (
		<Input
			radius="sm"
			endContent={<FaSearch />}
			placeholder={t("search")}
			className="mx-5 lg:w-80"
			variant="bordered"
		/>
	);
};
