import type { Dispatch } from "react";

export interface GeneralSettingsProps {
	changeTab: (tab: string) => void;
	setFormId: Dispatch<string>;
}
