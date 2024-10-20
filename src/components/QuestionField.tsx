import type { AnswerProps } from "@/interfaces/question";
import {
	Card,
	CardBody,
	CardHeader,
	Checkbox,
	Divider,
	Input,
	Radio,
	RadioGroup,
	Textarea,
} from "@nextui-org/react";
import type { FC } from "react";
import { useSession } from "next-auth/react";

interface QuestionFieldProps {
	question: AnswerProps;
	updateValue: (id: number, value: string | boolean) => void;
}

export const QuestionField: FC<QuestionFieldProps> = ({
	question,
	updateValue,
}) => {
	const { data: session } = useSession();

	return (
		<Card className="w-full max-w-[800px] mx-auto flex flex-col">
			<CardHeader>
				<p className="text-md font-semibold">{question.question}</p>
			</CardHeader>
			<Divider />
			<CardBody>
				{question.type === "long" && (
					<Textarea
						isDisabled={!session}
						radius="sm"
						color="primary"
						variant="bordered"
						label={"Tu respuesta"}
						value={question.value?.toString() || ""}
						onValueChange={(value) => updateValue(question.id, value)}
						description={question.description}
					/>
				)}
				{question.type === "short" && (
					<Input
						isDisabled={!session}
						radius="sm"
						color="primary"
						variant="bordered"
						label={"Tu respuesta"}
						value={question.value?.toString() || ""}
						onValueChange={(value) => updateValue(question.id, value)}
						description={question.description}
					/>
				)}

				{question.type === "numeric" && (
					<Input
						isDisabled={!session}
						radius="sm"
						color="primary"
						variant="bordered"
						label={"Tu respuesta"}
						value={question.value?.toString() || ""}
						onValueChange={(value) => {
							if (value.match(/^[0-9]*$/)) updateValue(question.id, value);
						}}
						description={question.description}
					/>
				)}
				{question.type === "single" && (
					<>
						<Checkbox
							isDisabled={!session}
							isSelected={Boolean(question.value)}
							onValueChange={(isSelected) =>
								updateValue(question.id, isSelected)
							}
						>
							Yes
						</Checkbox>
						<span className="text-xs text-gray-500 pt-1 pl-1">
							{question.description}
						</span>
					</>
				)}
				{question.type === "multiple" && (
					<div className="flex flex-col gap-2">
						<RadioGroup
							isDisabled={!session}
							label={question.question}
							value={question.value?.toString() || ""}
							onValueChange={(value) => updateValue(question.id, value)}
						>
							{question.options?.map((option) => (
								<Radio isDisabled={!session} key={option} value={option}>
									{option}
								</Radio>
							))}
						</RadioGroup>
						<span className="text-xs text-gray-500 pl-2">
							{question.description}
						</span>
					</div>
				)}
			</CardBody>
		</Card>
	);
};
