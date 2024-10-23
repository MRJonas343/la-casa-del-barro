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
import {
	CustomHeartIcon,
	MarkdownRenderArea,
	QuestionField,
} from "@/components";
import { formInitialState, formReducer } from "../store/state";
import { useEffect, useReducer, type FC } from "react";
import type { FormProps } from "@/interfaces";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { IoMdSend } from "react-icons/io";
import toast from "react-hot-toast";
import {
	submitForm,
	updateValue,
	uploadComment,
} from "../utils/formComponentHandlers";

export const FormComponent: FC<FormProps> = ({
	questions,
	formGeneralData,
	comments,
	isReadOnly,
}) => {
	const [state, dispatch] = useReducer(
		formReducer,
		questions,
		formInitialState,
	);

	const { data: session } = useSession();

	const router = useRouter();

	useEffect(() => {
		if (!session) {
			toast("You are in read only mode, please login to fill the form", {
				duration: 5000,
			});
		}
	}, []);

	return (
		<>
			<section className="flex w-[95%] mx-auto mt-5 flex-col gap-4 mb-10">
				<Card className="w-full max-w-[800px] mx-auto flex flex-col">
					<CardHeader className="flex gap-3">
						<Image
							alt={formGeneralData.title}
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
				{state.questionsState.map((question) => (
					<QuestionField
						key={question.id}
						isDisabled={isReadOnly}
						question={question}
						updateValue={(questionId, value) =>
							updateValue(questionId, value, state, dispatch)
						}
					/>
				))}

				<div className="w-full max-w-[800px] mx-auto flex flex-col gap-4">
					<Checkbox
						isDisabled={isReadOnly}
						className="px-3"
						isSelected={state.shouldSendCopy}
						onValueChange={(value) =>
							dispatch({
								type: "SET_SHOULD_SEND_COPY",
								payload: value,
							})
						}
					>
						Send me a copy of my answers
					</Checkbox>

					<Checkbox
						isDisabled={isReadOnly}
						className="px-3"
						icon={<CustomHeartIcon />}
						color="danger"
						isSelected={state.isFormLiked}
						onValueChange={(value) =>
							dispatch({ type: "SET_IS_FORM_LIKED", payload: value })
						}
					>
						Did you like this form?
					</Checkbox>

					<Button
						isDisabled={isReadOnly}
						onClick={() =>
							submitForm(formGeneralData, state, dispatch, router, session)
						}
						isLoading={state.isSubmitting}
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
								value={state.comment}
								onValueChange={(value) =>
									dispatch({ type: "SET_COMMENT", payload: value })
								}
							/>
							<Button
								radius="sm"
								variant="flat"
								color="primary"
								className="ml-2"
								onClick={() =>
									uploadComment(formGeneralData, state, dispatch, session)
								}
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
