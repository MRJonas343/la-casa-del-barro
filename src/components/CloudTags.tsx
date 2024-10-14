"use client";

import { Tab, Tabs } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { tabs } from "@/constants";
import type { FC } from "react";

export interface CloudTabsProps {
	selectedKey: string | null;
	changeTab: (tab: string) => void;
}

export const CloudTags: FC<CloudTabsProps> = ({ selectedKey, changeTab }) => {
	const t = useTranslations("CloudTags");

	return (
		<div className="w-[95%] mx-auto justify-start max-w-[1250px] lg:mx-auto flex mt-2 lg:mt-2 overflow-x-auto scrollBarCloudTags">
			<Tabs
				selectedKey={selectedKey}
				onSelectionChange={(key) => changeTab(key as string)}
				className="max-w-[1250px]"
				color="primary"
				variant="light"
				aria-label="Dynamic tabs"
			>
				{tabs.map((item) => (
					<Tab
						key={item.value}
						className={item.value === "noKey" ? "hidden" : ""}
						title={
							<div className="flex items-center space-x-2">
								{item.icon}
								<span>{t(item.value)}</span>
							</div>
						}
					/>
				))}
			</Tabs>
		</div>
	);
};
