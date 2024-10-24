"use client";

import type { FormDataToUpdate } from "@/interfaces/formDataToUpdate";
import { EditFormTabs } from "./EditFormTabs";
import FormQuestions from "./FormQuestions";
import { type FC, useState } from "react";
import FormSettings from "./FormSettings";

export interface EditFormProps {
	formId: string;
	data: FormDataToUpdate;
}

const EditFormComponent: FC<EditFormProps> = ({ formId, data }) => {
	const [selectedTab, setSelectedTab] = useState("general-settings");

	const formatedQuestions = data.questions.map((question) => ({
		...question,
		id: String(question.id),
	}));

	return (
		<>
			<div className="w-full flex flex-col lg:flex-row lg:max-w-[1280px] lg:mx-auto px-5">
				<EditFormTabs
					onSelectionChange={(key) => setSelectedTab(key)}
					selectedKey={selectedTab}
				/>
			</div>

			{selectedTab === "general-settings" && (
				<FormSettings data={data.formGeneralData} />
			)}
			{selectedTab === "edit-questions" && (
				<FormQuestions
					data={formatedQuestions}
					formId={Number.parseInt(formId)}
				/>
			)}
		</>
	);
};
export default EditFormComponent;
