"use client";

import { useState } from "react";
import { EditFormTabs } from "./EditFormTabs";
import FormSettings from "./FormSettings";

const EditFormComponent = () => {
	const [selectedTab, setSelectedTab] = useState("general-settings");

	const changeTab = (tab: string) => {
		console.log(tab);
		setSelectedTab(tab);
	};

	return (
		<>
			<div className="w-full flex flex-col lg:flex-row lg:max-w-[1280px] lg:mx-auto px-5">
				<EditFormTabs
					onSelectionChange={(key) => changeTab(key)}
					selectedKey={selectedTab}
				/>
			</div>
			{selectedTab === "general-settings" && <FormSettings />}
		</>
	);
};
export default EditFormComponent;
