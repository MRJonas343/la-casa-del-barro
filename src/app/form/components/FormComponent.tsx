"use client";

import {
	Card,
	CardHeader,
	Divider,
	CardBody,
	Image,
	Button,
	Checkbox,
} from "@nextui-org/react";
import type { FormProps, QuestionProps } from "@/interfaces";
import { MarkdownRenderArea, QuestionField, Snackbar } from "@/components";
import { FaHeart } from "react-icons/fa6";
import { useState, type FC } from "react";
import { useSession } from "next-auth/react";
import { fillForm } from "@/services";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const FormComponent: FC<FormProps> = ({
	questions,
	formGeneralData,
}) => {
	const [questionsState, setQuestionsState] =
		useState<QuestionProps[]>(questions);
	const [isFormLiked, setIsFormLiked] = useState(false);
	const [shouldSendCopy, setShouldSendCopy] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { data: session } = useSession();
	const router = useRouter();

	const updateValue = (id: number, value: string | boolean) => {
		setQuestionsState((prevState) =>
			prevState.map((question) =>
				question.id === id ? { ...question, value } : question,
			),
		);
	};

	const submitForm = async () => {
		setIsSubmitting(true);

		const result = await fillForm({
			form: questionsState,
			isFormLiked,
			shouldSendCopy,
			userId: Number.parseInt(session?.user?.id ?? ""),
			formId: formGeneralData.id,
			userEmail: session?.user?.email,
			userName: session?.user?.name,
			formName: formGeneralData.title,
		});

		if (result === "SUCCESS") toast.success("Form submitted successfully");

		router.push("/dashboard");

		setIsSubmitting(false);
	};

	return (
		<>
			<section className="flex w-[95%] mx-auto mt-5 flex-col gap-4 mb-10">
				<Card className="w-full max-w-[800px] mx-auto flex flex-col">
					<CardHeader className="flex gap-3">
						<Image
							alt="nextui logo"
							height={40}
							radius="sm"
							src={formGeneralData.imageUrl}
							width={40}
						/>

						<p className="text-md font-semibold">{formGeneralData.title}</p>
					</CardHeader>
					<Divider />
					<CardBody>
						<MarkdownRenderArea>
							{formGeneralData.description}
						</MarkdownRenderArea>
					</CardBody>
				</Card>
				{questionsState.map((question) => (
					<QuestionField
						key={question.id}
						question={question}
						updateValue={updateValue}
					/>
				))}

				<div className="w-full max-w-[800px] mx-auto flex flex-col gap-4">
					<Checkbox
						className="px-3"
						isSelected={shouldSendCopy}
						onValueChange={setShouldSendCopy}
					>
						Send me a copy of my answers
					</Checkbox>

					<Checkbox
						className="px-3"
						icon={<FaHeart />}
						color="danger"
						isSelected={isFormLiked}
						onValueChange={setIsFormLiked}
					>
						Did you like this form?
					</Checkbox>

					<Button
						onClick={submitForm}
						isLoading={isSubmitting}
						variant="shadow"
						color="primary"
						radius="sm"
						className="text-lg font-semibold"
					>
						Submit
					</Button>
				</div>
			</section>
			<Snackbar />
		</>
	);
};
