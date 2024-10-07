import { useLocale, useTranslations } from "next-intl";
import LocalSwitcherSelect from "./LocalSwitcherSelect";

export const LanguageSwitcher = () => {
	const t = useTranslations("LocaleSwitcher");
	const locale = useLocale();

	return (
		<LocalSwitcherSelect
			defaultValue={locale}
			items={[
				{ value: "en", label: t("en") },
				{ value: "es", label: t("es") },
			]}
			label={t("label")}
		/>
	);
};
