"use client";

import { Tabs, Tab } from "@nextui-org/react";

export const DashboardTabs = () => {
	return (
		<Tabs
			size="lg"
			radius="sm"
			variant="underlined"
			defaultSelectedKey="my-forms"
			aria-label="Options"
			color="primary"
			className="mt-6"
		>
			<Tab key="my-forms" title="My Forms" />
			<Tab key="my-answers" title="My Answers" />
		</Tabs>
	);
};
