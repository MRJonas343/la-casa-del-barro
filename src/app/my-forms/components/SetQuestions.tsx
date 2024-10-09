"use client";

import { QuestionContainer } from "./QuestionContainer";
import type { SetQuestionsProps } from "@/interfaces";
import { IoMdAddCircleOutline } from "react-icons/io";
import type { QuestionElement } from "@/interfaces";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import type { FC } from "react";

export const SetQuestions: FC<SetQuestionsProps> = ({ formTitle }) => {
	const questions: QuestionElement[] = [
		{
			questionName: "Question Name",
			questionType: "short",
			description: "This is a short description",
		},
		{
			questionName: "What is your age?",
			questionType: "numeric",
			description: "This is a long description",
		},
		{
			questionName: "What is your email?",
			questionType: "long",
			description: "This is a long description",
		},
		{
			questionName: "Do you like apples?",
			questionType: "single",
			description: "This is a long description",
			options: ["Yes", "No"],
		},
		{
			questionName: "What is your favorite food?",
			questionType: "multiple",
			description: "This is a long description",
			options: ["Pizza", "Burger", "Tacos"],
		},
	];

	const [questionsState, setQuestionsState] =
		useState<QuestionElement[]>(questions);

	return (
		<>
			<div className="mt-4 flex flex-col w-[90%] sm:w-[95%] mx-auto max-w-[1240px]">
				<section className="sm:mt-4 flex flex-col gap-3 mb-20">
					{questions.map((question) => (
						<QuestionContainer
							key={question.questionName}
							description={question.description}
							questionName={question.questionName}
							questionType={question.questionType}
							options={question.options}
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
					endContent={<IoMdAddCircleOutline size={25} />}
				>
					Add question
				</Button>
			</div>
		</>
	);
};
