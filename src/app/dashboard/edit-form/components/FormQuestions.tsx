"use client";

import { useDndSensors } from "@/hooks";
import type { Question } from "@/interfaces/formDataToUpdate";
import { DndContext } from "@dnd-kit/core";
import {
	restrictToParentElement,
	restrictToVerticalAxis,
} from "@dnd-kit/modifiers";
import {
	SortableContext,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useRef, useState } from "react";
import { QuestionContainer } from "../../components";
import { Button, useDisclosure } from "@nextui-org/react";
import type { QuestionType } from "@/interfaces";
import { changeQuestionsPositions } from "../utils/changeQuestionsPositions";
import { changeControlledInputs } from "../utils/changeControlledInputs";
import { deleteControlledQuestion } from "../utils/deleteQuestions";
import { changeMultipleQuestionInputs } from "../utils/changeMultipleQuestinInputs";
import { createControlledInput } from "../utils/createControlledInput";
import ModalConfirm from "./ModalConfirm";
import { updateForm } from "../utils/updateForm";
import toast from "react-hot-toast";

const FormQuestions = ({
	data,
	formId,
}: { data: Question[]; formId: number }) => {
	const [questionToDelete, setQuestionToDelete] = useState<string | null>(null);
	const [questionsState, setQuestionsState] = useState<Question[]>(data);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const initialData = useRef(data);

	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

	const sensors = useDndSensors();

	const updateQuestions = async () => {
		setIsSubmitting(true);
		const result = await updateForm(questionsState, initialData);
		if (result === "SUCCESS") toast.success("Questions updated successfully");
		setIsSubmitting(false);
	};

	const onOpenQuestionModal = (id: string) => {
		setQuestionToDelete(id);
		onOpen();
	};

	const isExistingQuestion = (questionId: number) => {
		return initialData.current.some(
			(q) => Number.parseInt(q.id) === questionId,
		);
	};

	return (
		<>
			<div className="mt-4 flex flex-col w-[90%] sm:w-[95%] mx-auto max-w-[1240px]">
				<section className="sm:mt-4 flex flex-col gap-3 mb-20">
					<DndContext
						sensors={sensors}
						onDragEnd={(e) =>
							changeQuestionsPositions(
								formId,
								questionsState,
								e,
								setQuestionsState,
							)
						}
						modifiers={[restrictToVerticalAxis, restrictToParentElement]}
					>
						<SortableContext
							items={questionsState}
							strategy={verticalListSortingStrategy}
						>
							{questionsState.map((question) => (
								<QuestionContainer
									key={question.id}
									id={String(question.id)}
									disableType={isExistingQuestion(Number.parseInt(question.id))}
									description={question.description ?? ""}
									questionName={question.question}
									onQuestionChange={(id, type, value) => {
										changeControlledInputs(id, type, value, setQuestionsState);
									}}
									deleteQuestion={(id) => {
										onOpenQuestionModal(id);
									}}
									questionType={question.type as QuestionType}
									displayInTable={question.displayInTable}
									options={question.options}
									onOptionsChange={(id, newOptions) => {
										changeMultipleQuestionInputs(
											id,
											newOptions,
											setQuestionsState,
										);
									}}
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
					onClick={() =>
						createControlledInput(formId, questionsState, setQuestionsState)
					}
				>
					Add question
				</Button>
				<Button
					isLoading={isSubmitting}
					variant="shadow"
					color="primary"
					radius="sm"
					className="font-semibold"
					onClick={updateQuestions}
				>
					Update Questions
				</Button>
			</div>
			<ModalConfirm
				isOpen={isOpen}
				onOpen={onOpen}
				onOpenChange={onOpenChange}
				onConfirm={() => {
					if (questionToDelete) {
						deleteControlledQuestion(
							Number.parseInt(questionToDelete),
							formId,
							setQuestionsState,
							onOpen,
						);
						onClose();
					}
				}}
			/>
		</>
	);
};
export default FormQuestions;
