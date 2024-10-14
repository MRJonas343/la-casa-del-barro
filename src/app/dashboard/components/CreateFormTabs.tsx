import { Tabs, Tab } from "@nextui-org/react";
import type { FC } from "react";

export interface CreateFormTabsProps {
	selectedKey: string;
}

export const CreateFormTabs: FC<CreateFormTabsProps> = ({ selectedKey }) => {
	return (
		<Tabs
			size="lg"
			radius="sm"
			variant="underlined"
			selectedKey={selectedKey}
			aria-label="Options"
			color="primary"
			className="mt-2 lg:mt-6"
		>
			<Tab
				key="general-settings"
				title="General Settings"
				className="cursor-default"
			/>
			<Tab
				key="set-questions"
				title="Set Questions"
				className="cursor-default"
			/>
		</Tabs>
	);
};
