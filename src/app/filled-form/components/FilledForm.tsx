"use client";

import {
	Card,
	CardHeader,
	Image,
	CardBody,
	Divider,
	Button,
} from "@nextui-org/react";
import { MarkdownRenderArea, CommentsSection } from "@/components";
import type { FilledFormProps, Question } from "@/interfaces";
import FilledQuestion from "./FilledQuestion";
import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { updateForm } from "../utils";

export const FilledForm = ({ data }: { data: FilledFormProps }) => {
	const [questionsState, setQuestionsState] = useState(data.questions);
	const initialData = useRef(data.questions);
	const { data: session } = useSession();

	const updateValue = (id: number, value: string | boolean | number) => {
		setQuestionsState((prevState) =>
			prevState.map((question) =>
				question.id === id ? { ...question, answer: value } : question,
			),
		);
	};

	return (
		<section className="flex w-[95%] mx-auto mt-5 flex-col gap-4 mb-10">
			<Card className="w-full max-w-[800px] mx-auto flex flex-col">
				<CardHeader className="flex gap-3">
					<Image
						alt="nextui logo"
						height={40}
						radius="sm"
						src={data.form?.imageUrl}
						width={40}
					/>

					<p className="text-md font-semibold">{data.form?.title}</p>
				</CardHeader>
				<Divider />
				<CardBody>
					<MarkdownRenderArea>{data.form?.description}</MarkdownRenderArea>
				</CardBody>
			</Card>
			{questionsState.map((question) => (
				<FilledQuestion
					id={question.id}
					key={question.id}
					question={question.question}
					answer={question.answer}
					type={question.type}
					description={question.description}
					options={question.options}
					displayInTable={question.displayInTable}
					order={question.order}
					updateValue={(id, value) => updateValue(id, value)}
				/>
			))}
			<div
				className={`w-full max-w-[830px] mx-auto flex flex-col p-4 ${session?.user.role !== "admin" && "hidden"}`}
			>
				<Button
					hidden={session?.user.role !== "admin"}
					color="primary"
					radius="sm"
					className="sm:text-lg font-semibold"
					variant="shadow"
					onPress={() => updateForm(questionsState, initialData)}
				>
					Update Form
				</Button>
			</div>
			<CommentsSection formId={data.form?.id} comments={data.commentsResult} />
		</section>
	);
};
