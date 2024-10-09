"use client";

import type { SetQuestionsProps, Question } from "@/interfaces";
import { QuestionContainer } from "./QuestionContainer";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Button } from "@nextui-org/react";
import { questions } from "@/constants";
import { useState } from "react";
import type { FC } from "react";

export const SetQuestions: FC<SetQuestionsProps> = () => {
	const [questionsState, setQuestionsState] = useState<Question[]>(questions);

	const handleQuestionChange = (id: string, key: string, value: string) => {
		setQuestionsState((prevState) =>
			prevState.map((question) =>
				question.id === id ? { ...question, [key]: value } : question,
			),
		);
	};

	const createNewQuestion = () => {
		const newQuestion: Question = {
			id: (questionsState.length + 1).toString(),
			questionName: "New Question",
			questionType: "short",
			description: "Add a description",
		};
		setQuestionsState([...questionsState, newQuestion]);
		console.log(questionsState[2].questionName);
	};

	return (
		<>
			<div className="mt-4 flex flex-col w-[90%] sm:w-[95%] mx-auto max-w-[1240px]">
				<section className="sm:mt-4 flex flex-col gap-3 mb-20">
					{questionsState.map((question) => (
						<QuestionContainer
							id={question.id}
							key={question.id}
							description={question.description}
							questionName={question.questionName}
							onQuestionChange={handleQuestionChange}
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
					onClick={createNewQuestion}
					endContent={<IoMdAddCircleOutline size={25} />}
				>
					Add question
				</Button>
			</div>
		</>
	);
};
