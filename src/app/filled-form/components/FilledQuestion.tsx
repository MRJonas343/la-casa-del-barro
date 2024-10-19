import type { Question } from "@/interfaces";
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

const FilledQuestion: FC<Question> = ({
	answer,
	question,
	options,
	type,
	description,
}) => {
	return (
		<Card className="w-full max-w-[800px] mx-auto flex flex-col">
			<CardHeader>
				<p className="text-md font-semibold">{question as string}</p>
			</CardHeader>
			<Divider />
			<CardBody>
				{type === "long" && (
					<Textarea
						isDisabled
						radius="sm"
						color="primary"
						variant="bordered"
						label={"Tu respuesta"}
						value={answer as string}
						description={description}
					/>
				)}
				{type === "short" && (
					<Input
						isDisabled
						radius="sm"
						color="primary"
						variant="bordered"
						label={"Tu respuesta"}
						value={answer as string}
						description={description}
					/>
				)}

				{type === "numeric" && (
					<Input
						isDisabled
						radius="sm"
						color="primary"
						variant="bordered"
						label={"Tu respuesta"}
						value={answer as string}
						description={description}
					/>
				)}
				{type === "single" && (
					<>
						<Checkbox isDisabled isSelected={answer as boolean}>
							Yes
						</Checkbox>
						<span className="text-xs text-gray-500 pt-1 pl-1">
							{description}
						</span>
					</>
				)}
				{type === "multiple" && (
					<div className="flex flex-col gap-2">
						<RadioGroup isDisabled label={question} value={answer as string}>
							{options?.map((option) => (
								<Radio
									isDisabled
									key={option as string}
									value={option as string}
								>
									{option as string}
								</Radio>
							))}
						</RadioGroup>
						<span className="text-xs text-gray-500 pl-2">{description}</span>
					</div>
				)}
			</CardBody>
		</Card>
	);
};
export default FilledQuestion;
