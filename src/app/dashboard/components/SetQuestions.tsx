"use client";

import {
	changeControlledInputs,
	changeMultipleQuestionInputs,
	deleteControlledQuestion,
	createControlledInput,
	changeQuestionsPositions,
} from "../utils";
import {
	verticalListSortingStrategy,
	SortableContext,
} from "@dnd-kit/sortable";
import {
	restrictToParentElement,
	restrictToVerticalAxis,
} from "@dnd-kit/modifiers";
import type { SetQuestionsProps, Question } from "@/interfaces";
import { QuestionContainer } from "./QuestionContainer";
import { initialQuestion } from "@/constants";
import { DndContext } from "@dnd-kit/core";
import { Button } from "@nextui-org/react";
import { useState, type FC } from "react";
import { useDndSensors } from "@/hooks";
import { setNewFormQuestions } from "@/services";
import { handleStatus } from "@/utils/handleStatus";
import { useTranslations } from "next-intl";

export const SetQuestions: FC<SetQuestionsProps> = ({ formId }) => {
	const [questions, setQuestions] = useState<Question[]>([initialQuestion]);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const t = useTranslations("createForm");
	const sensors = useDndSensors();

	const createNewForm = async () => {
		setIsSubmitting(true);
		const status = await setNewFormQuestions(
			Number.parseInt(formId),
			questions,
		);
		handleStatus(status, t, "/dashboard");
		setIsSubmitting(false);
	};

	return (
		<>
			<div className="mt-4 flex flex-col w-[90%] sm:w-[95%] mx-auto max-w-[1240px]">
				<section className="sm:mt-4 flex flex-col gap-3 mb-20">
					<DndContext
						sensors={sensors}
						onDragEnd={(e) => changeQuestionsPositions(e, setQuestions)}
						modifiers={[restrictToVerticalAxis, restrictToParentElement]}
					>
						<SortableContext
							items={questions}
							strategy={verticalListSortingStrategy}
						>
							{questions.map((question) => (
								<QuestionContainer
									id={question.id}
									key={question.id}
									description={question.description}
									questionName={question.questionName}
									onQuestionChange={(id, type, value) =>
										changeControlledInputs(id, type, value, setQuestions)
									}
									deleteQuestion={(id) =>
										deleteControlledQuestion(id, setQuestions)
									}
									questionType={question.questionType}
									displayInTable={question.displayInTable}
									options={question.options}
									onOptionsChange={(id, newOptions) =>
										changeMultipleQuestionInputs(id, newOptions, setQuestions)
									}
								/>
							))}
						</SortableContext>
					</DndContext>
				</section>
			</div>
			<div className="z-10 fixed bottom-0 w-full flex p-4 justify-center backdrop-blur-xl gap-4">
				<Button
					variant="flat"
					color="primary"
					radius="sm"
					className="font-semibold"
					onClick={() => createControlledInput(questions, setQuestions)}
				>
					Add question
				</Button>
				<Button
					isLoading={isSubmitting}
					variant="shadow"
					color="primary"
					radius="sm"
					className="font-semibold"
					onClick={createNewForm}
				>
					Create Form
				</Button>
			</div>
		</>
	);
};