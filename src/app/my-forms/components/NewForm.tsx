"use client";

import { GeneralSettings, CreateFormTabs, SetQuestions } from ".";
import { useState } from "react";

export const NewForm = () => {
	const [selectedTab, setSelectedTab] = useState("general-settings");
	const [formTitle, setFormTitle] = useState("");

	const onTabChange = (tab: string) => setSelectedTab(tab);

	return (
		<>
			<div className="w-full flex flex-row lg:max-w-[1280px] sm:mx-auto px-5">
				<CreateFormTabs selectedKey={selectedTab} changeTab={onTabChange} />
			</div>

			{selectedTab === "general-settings" ? (
				<GeneralSettings changeTab={onTabChange} setFormTitle={setFormTitle} />
			) : (
				<SetQuestions formTitle={formTitle} />
			)}
		</>
	);
};
