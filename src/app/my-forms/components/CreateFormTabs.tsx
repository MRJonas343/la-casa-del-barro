"use client";

import { Tabs, Tab } from "@nextui-org/react";

export const CreateFormTabs = () => {
	return (
		<Tabs
			size="lg"
			radius="sm"
			variant="underlined"
			defaultSelectedKey="my-forms"
			aria-label="Options"
			color="primary"
			className="mt-2 lg:mt-6"
		>
			<Tab key="general-settings" title="General Settings" />
			<Tab key="set-questions" title="Set Questions" />
		</Tabs>
	);
};
