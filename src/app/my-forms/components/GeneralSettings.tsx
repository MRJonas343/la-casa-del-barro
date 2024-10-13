"use client";

import { Button, Input, Select, Textarea, Checkbox } from "@nextui-org/react";
import type { FormSettings, GeneralSettingsProps } from "@/interfaces";
import { tabs, topics, usersExamples } from "@/constants";
import { SelectItem } from "@nextui-org/react";
import { useDropzone } from "react-dropzone";
import { SearchInput } from "@/components";
import { useForm } from "react-hook-form";
import type { Selection } from "@nextui-org/react";
import { useState, type FC } from "react";
import { createForm } from "@/services";
import { useSession } from "next-auth/react";

export const GeneralSettings: FC<GeneralSettingsProps> = ({
	changeTab,
	setFormId,
}) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isFormPublic, setIsFormPublic] = useState(false);
	const [topicsState, setTopicsState] = useState<Selection>(new Set([]));
	const [image, setImage] = useState<File | null>(null);

	const { data: session } = useSession();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FormSettings>();

	const onSubmit = async (data: FormSettings) => {
		setIsSubmitting(true);

		if (data.otherTopic) data.topic = data.otherTopic;

		const formData = new FormData();
		if (image) formData.append("image", image);
		const userId = Number.parseInt(session?.user?.id ?? "");

		const formId = await createForm(data, userId, formData);

		//*TODO : SEND A TOAST WITH THE ERROR
		if (formId === "INVALID_FORM") return;
		setFormId(formId.toString());
		changeTab("set-questions");

		setIsSubmitting(false);
	};

	const { getRootProps, getInputProps } = useDropzone({
		maxFiles: 1,
		accept: {
			"image/*": [".png", ".jpg", ".jpeg", ".webp"],
		},
		onDrop: (acceptedFiles) => setImage(acceptedFiles[0]),
	});

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="mt-4 flex flex-col gap-3 w-[90%] sm:w-[95%] mx-auto max-w-[1240px]"
		>
			<div className="md:flex md:gap-8">
				<Input
					isRequired
					autoFocus
					radius="sm"
					isInvalid={Boolean(errors.title)}
					errorMessage="This field is required"
					variant="bordered"
					className="w-full"
					label="Title"
					{...register("title", {
						required: true,
					})}
				/>
				<Select
					isRequired
					radius="sm"
					label="Topic"
					variant="bordered"
					isInvalid={Boolean(errors.topic)}
					selectedKeys={topicsState}
					onSelectionChange={setTopicsState}
					errorMessage="This field is required"
					selectionMode="single"
					className="w-full mt-3 md:mt-0"
					{...register("topic", {
						required: true,
					})}
				>
					{topics.map((topic) => (
						<SelectItem key={topic.topic}>{topic.topic}</SelectItem>
					))}
				</Select>
				{
					<Input
						radius="sm"
						variant="bordered"
						label="Add a topic"
						//@ts-ignore
						className={`w-full mt-3 md:mt-0 ${!topicsState.has("Other") && "hidden"}`}
						//@ts-ignore
						isRequired={topicsState.has("Other")}
						isInvalid={Boolean(errors.otherTopic)}
						{...register("otherTopic", {
							//@ts-ignore
							required: topicsState.has("Other"),
						})}
					/>
				}
			</div>
			<Textarea
				isRequired
				radius="sm"
				variant="bordered"
				label="Description"
				className="w-full"
				errorMessage="This field is required"
				isInvalid={Boolean(errors.description)}
				{...register("description", {
					required: true,
				})}
			>
				Description
			</Textarea>

			<Select
				radius="sm"
				label="Add Tags"
				variant="bordered"
				selectionMode="multiple"
				className="w-full"
				{...register("tags")}
			>
				{tabs.map((tag) => (
					<SelectItem key={tag.id}>{tag.value}</SelectItem>
				))}
			</Select>
			<div
				{...getRootProps({ className: "dropzone" })}
				className="border-2 p-3 border-default-200 rounded-md cursor-pointer"
			>
				<label className="text-default-500">Add image</label>
				<input type="file" className="w-full" {...getInputProps()} />

				<p className="text-default-500">
					Drop an image or{" "}
					<span className="text-blue-600 font-semibold cursor-pointer">
						click here
					</span>{" "}
					to select from your device(png, jpg, jpeg, webp)
				</p>
				<ul>{image?.name}</ul>
			</div>
			<Checkbox
				radius="sm"
				className=""
				isSelected={isFormPublic}
				onValueChange={setIsFormPublic}
				{...register("isPublic")}
			>
				Make this form public
			</Checkbox>
			{!isFormPublic && (
				<>
					<div className="flex mt-1 gap-3">
						<Select
							label="Search by"
							radius="sm"
							size="sm"
							variant="bordered"
							selectionMode="single"
							className="w-48"
						>
							<SelectItem key="username">Name</SelectItem>
							<SelectItem key="email">Email</SelectItem>
						</Select>
						<SearchInput
							placeholder="Search Users"
							size="lg"
							classname="mx-o"
						/>
					</div>
					<Select
						items={usersExamples}
						label="Assigned to"
						variant="bordered"
						isMultiline={true}
						selectionMode="multiple"
						placeholder="Select Users"
						labelPlacement="outside"
						className="w-full"
						classNames={{
							trigger: "min-h-12 py-2",
						}}
						{...register("users")}
					>
						{(user) => (
							<SelectItem key={user.id} textValue={user.name}>
								<div className="flex flex-col">
									<span className="text-small">{user.name}</span>
									<span className="text-tiny text-default-400">
										{user.email}
									</span>
								</div>
							</SelectItem>
						)}
					</Select>
				</>
			)}
			<Button
				isLoading={isSubmitting}
				className="mb-10 font-semibold"
				type="submit"
				color="primary"
				radius="sm"
				variant="shadow"
			>
				Set Questions
			</Button>
		</form>
	);
};
