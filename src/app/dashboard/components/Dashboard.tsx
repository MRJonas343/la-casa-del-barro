"use client";

import { DashboardTabs, MyFormsTable, MyFilledForm } from ".";
import { SearchInput } from "@/components";
import type { UserForms } from "@/interfaces";
import { useState, type FC } from "react";

interface DashboardProps {
	userForms: UserForms[];
}

export const Dashboard: FC<DashboardProps> = ({ userForms }) => {
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
					<MyFormsTable forms={userForms} />
				</>
			) : (
				<>
					<MyFilledForm />
				</>
			)}
		</>
	);
};
