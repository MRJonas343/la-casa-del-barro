"use client";

import { Input, Textarea, Select, SelectItem, Card } from "@nextui-org/react";
import { MdOutlineDragIndicator } from "react-icons/md";
import type { QuestionElementProps } from "@/interfaces";
import { FaTrash } from "react-icons/fa";
import type { FC } from "react";

export const QuestionContainer: FC<QuestionElementProps> = ({
	id,
	questionName,
	questionType,
	description,
	options,
	onQuestionChange,
}) => {
	return (
		<Card className="p-3 sm:p-5">
			<div className="flex w-full pb-2 sm:pb-3">
				<div className="w-[51%] flex justify-end">
					<MdOutlineDragIndicator className="cursor-grab rotate-90" size={25} />
				</div>
				<div className="w-[49%] flex justify-end pr-2">
					<FaTrash size={18} className="cursor-pointer" color="red" />
				</div>
			</div>

			<div className="sm:flex gap-4">
				<Input
					radius="sm"
					variant="bordered"
					className="w-full"
					label="Question Name"
					value={questionName}
					onValueChange={(e) => onQuestionChange(id, "questionName", e)}
				/>
				<Select
					radius="sm"
					label="Type"
					variant="bordered"
					selectionMode="single"
					className="w-full mt-3 sm:mt-0"
				>
					<SelectItem key="short">Short</SelectItem>
					<SelectItem key="long">Long</SelectItem>
					<SelectItem key="numeric">Numeric</SelectItem>
					<SelectItem key="single">Single</SelectItem>
					<SelectItem key="multiple">Multiple</SelectItem>
				</Select>
			</div>
			<Textarea
				size="sm"
				radius="sm"
				variant="bordered"
				label={description}
				className="w-full mt-3"
			/>

			{questionType === "multiple" && (
				<div className="flex flex-col gap-2 px-1 pt-2">
					<p>Options</p>
					{options?.map((option) => (
						<div key={option} className="flex items-center gap-2">
							<Input
								size="sm"
								radius="sm"
								variant="bordered"
								className="w-full"
								label={option}
							/>
						</div>
					))}
				</div>
			)}
		</Card>
	);
};
