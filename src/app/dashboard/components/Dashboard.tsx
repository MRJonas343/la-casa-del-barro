"use client";

import { DashboardTabs, MyFormsTable, MyFilledForm } from ".";
import type { FilledForm, UserForms } from "@/interfaces";
import { SearchInput } from "@/components";
import { useState } from "react";

interface DashboardProps {
	userForms: UserForms[];
	filledForms: FilledForm[];
}

export const Dashboard = ({ userForms, filledForms }: DashboardProps) => {
	const [tab, setTab] = useState("my-forms");

	const changeTab = (tab: string) => setTab(tab);

	return (
		<>
			<div className="w-full flex flex-col lg:flex-row lg:max-w-[1280px] lg:mx-auto px-5">
				<DashboardTabs selectedKey={tab} changeTab={(tab) => changeTab(tab)} />
			</div>
			{tab === "my-forms" ? (
				<>
					{" "}
					<MyFormsTable forms={userForms} />{" "}
				</>
			) : (
				<>
					<MyFilledForm filledForms={filledForms} />
				</>
			)}
		</>
	);
};
