"use client";

import {
	Card,
	CardHeader,
	Divider,
	CardBody,
	Image,
	Button,
	Checkbox,
	Input,
} from "@nextui-org/react";
import type { FormProps, Comment, QuestionFieldProps } from "@/interfaces";
import { MarkdownRenderArea, QuestionField } from "@/components";
import { FaHeart } from "react-icons/fa6";
import { useEffect, useState, type FC } from "react";
import { useSession } from "next-auth/react";
import { createComment, fillForm, checkPermission } from "@/services";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { IoMdSend } from "react-icons/io";

export const FormComponent: FC<FormProps> = ({
	questions,
	formGeneralData,
	comments,
}) => {
	const [questionsState, setQuestionsState] =
		useState<QuestionFieldProps[]>(questions);
	const [isFormLiked, setIsFormLiked] = useState(false);
	const [shouldSendCopy, setShouldSendCopy] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [comment, setComment] = useState("");
	const [isFormDisabled, setIsFormDisabled] = useState(false);
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

	const uploadComment = async () => {
		if (!comment) return;
		await createComment(
			formGeneralData.id,
			Number.parseInt(session?.user?.id ?? ""),
			comment,
		);

		setComment("");
	};

	const checkUserPermission = async () => {
		const hasPermission = await checkPermission(
			formGeneralData.id,
			Number.parseInt(session?.user?.id ?? "0"),
		);
		if (!hasPermission) setIsFormDisabled(true);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (!session) {
			toast("You are in read only mode, please login to fill the form", {
				duration: 5000,
			});
			setIsFormDisabled(true);
		}
		if (!formGeneralData.isPublic) checkUserPermission();
	}, []);

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
						isDisabled={isFormDisabled}
						question={question}
						updateValue={updateValue}
					/>
				))}

				<div className="w-full max-w-[800px] mx-auto flex flex-col gap-4">
					<Checkbox
						isDisabled={isFormDisabled}
						className="px-3"
						isSelected={shouldSendCopy}
						onValueChange={setShouldSendCopy}
					>
						Send me a copy of my answers
					</Checkbox>

					<Checkbox
						isDisabled={isFormDisabled}
						className="px-3"
						icon={<FaHeart />}
						color="danger"
						isSelected={isFormLiked}
						onValueChange={setIsFormLiked}
					>
						Did you like this form?
					</Checkbox>

					<Button
						isDisabled={isFormDisabled}
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

				<Divider className="mt-4" />
				<div className="mx-2">
					<h2 className="text-lg font-semibold text-center mt-4 mb-2">
						Comments
					</h2>

					<Card className="w-full max-w-[800px] mx-auto flex flex-col p-4">
						<div className="w-full flex mb-2">
							<Input
								radius="sm"
								placeholder="Add a comment"
								value={comment}
								onValueChange={setComment}
							/>
							<Button
								radius="sm"
								variant="flat"
								color="primary"
								className="ml-2"
								onClick={uploadComment}
								isIconOnly
							>
								<IoMdSend size={20} />
							</Button>
						</div>
						{comments.map((comment) => (
							<div className="flex flex-col pb-3 px-1" key={comment.id}>
								<p className="text-sm text-gray-500">{comment.userName}</p>
								<p className="text-sm">{comment.comment}</p>
							</div>
						))}
					</Card>
				</div>
			</section>
		</>
	);
};
