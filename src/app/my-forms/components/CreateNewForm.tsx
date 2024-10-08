"use client";

import { Button, Input, Select, Textarea, Checkbox } from "@nextui-org/react";
import { SelectItem } from "@nextui-org/react";
import type { Selection } from "@nextui-org/react";
import { CreateFormTabs } from "./CreateFormTabs";
import { tabs, topics, usersExamples } from "@/constants";
import { useState } from "react";
import { SearchInput } from "@/components";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import type { FormSettings } from "@/interfaces";

export const CreateNewForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [selectedTags, setSelectedTags] = useState<Selection>(new Set([]));
	const [selectedTopic, setSelectedTopic] = useState<Selection>(new Set([]));
	const [selectedUsersIds, setSelectedUsersIds] = useState<Selection>(
		new Set([]),
	);
	const [isFormPublic, setIsFormPublic] = useState(false);
	const [image, setImage] = useState<File | null>(null);

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<FormSettings>();

	const onSubmit = async (data: FormSettings) => {
		setIsSubmitting(true);
		reset();
		console.log(data);

		setIsSubmitting(false);
	};

	const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
		maxFiles: 1,
		accept: {
			"image/*": [".png", ".jpg", ".jpeg", ".svg", ".webp"],
		},
		onDrop: (acceptedFiles) => {
			setImage(acceptedFiles[0]);
		},
	});

	return (
		<>
			<div className="w-full flex flex-row lg:max-w-[1280px] sm:mx-auto px-5">
				<CreateFormTabs />
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mt-4 flex flex-col gap-3 w-[90%] sm:w-[95%] mx-auto max-w-[1240px]">
					<div className="md:flex md:gap-8">
						<Input
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
							radius="sm"
							label="Topic"
							variant="bordered"
							isInvalid={Boolean(errors.topic)}
							errorMessage="This field is required"
							selectionMode="single"
							selectedKeys={selectedTopic}
							className="w-full mt-3 md:mt-0"
							onSelectionChange={setSelectedTopic}
							{...register("topic", {
								required: true,
							})}
						>
							{topics.map((topic) => (
								<SelectItem key={topic.topic}>{topic.topic}</SelectItem>
							))}
						</Select>
					</div>
					<Textarea
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
						selectedKeys={selectedTags}
						className="w-full"
						onSelectionChange={setSelectedTags}
						{...register("tags")}
					>
						{tabs.map((tag) => (
							<SelectItem key={tag.id}>{tag.id}</SelectItem>
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
									//onSelectionChange={setSelectedTags}
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
								selectedKeys={selectedUsersIds}
								isMultiline={true}
								onSelectionChange={setSelectedUsersIds}
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
						Save Form
					</Button>
				</div>
			</form>
		</>
	);
};
