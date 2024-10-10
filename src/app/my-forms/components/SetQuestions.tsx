"use client";

import { changeControlledInputs, changeMultipleQuestionInputs } from "../utils";
import { deleteControlledQuestion, createControlledInput } from "../utils";
import type { SetQuestionsProps, Question } from "@/interfaces";
import { QuestionContainer } from "./QuestionContainer";
import { IoMdAddCircleOutline } from "react-icons/io";
import { initialQuestion } from "@/constants";
import { Button } from "@nextui-org/react";
import { useState, type FC } from "react";

export const SetQuestions: FC<SetQuestionsProps> = () => {
	const [questions, setQuestions] = useState<Question[]>([initialQuestion]);

	const submitQuestions = () => {
		console.log(questions);
	};

	return (
		<>
			<div className="mt-4 flex flex-col w-[90%] sm:w-[95%] mx-auto max-w-[1240px]">
				<section className="sm:mt-4 flex flex-col gap-3 mb-20">
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
				</section>
			</div>
			<div className="z-10 fixed bottom-0 w-full flex p-4 justify-center backdrop-blur-xl">
				<Button
					variant="shadow"
					color="primary"
					radius="sm"
					className="font-semibold"
					onClick={() => createControlledInput(questions, setQuestions)}
					endContent={<IoMdAddCircleOutline size={25} />}
				>
					Add question
				</Button>
			</div>
		</>
	);
};
