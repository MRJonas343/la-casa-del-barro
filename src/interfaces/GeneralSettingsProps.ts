import type { Dispatch } from "react";

export interface GeneralSettingsProps {
	changeTab: (tab: string) => void;
	setFormTitle: Dispatch<string>;
}
