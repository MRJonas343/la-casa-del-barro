"use client";

import { DashboardTabs, MyFormsTable, MyFilledForm } from ".";
import { SearchInput } from "@/components";
import { useState } from "react";

export const Dashboard = () => {
	const [tab, setTab] = useState("my-forms");

	const changeTab = (tab: string) => setTab(tab);

	return (
		<>
			<div className="w-full flex lg:justify-end lg:flex mt-4 lg:max-w-[1280px] lg:mx-auto">
				<SearchInput />
			</div>
			<div className="w-full flex flex-col lg:flex-row lg:max-w-[1280px] lg:mx-auto px-5">
				<DashboardTabs selectedKey={tab} changeTab={(tab) => changeTab(tab)} />
			</div>
			{tab === "my-forms" ? (
				<>
					<MyFormsTable />
				</>
			) : (
				<>
					<MyFilledForm />
				</>
			)}
		</>
	);
};
