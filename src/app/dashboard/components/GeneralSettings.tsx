"use client";

import {
	Button,
	Input,
	Select,
	Textarea,
	Checkbox,
	Tooltip,
	Autocomplete,
	AutocompleteItem,
	User,
} from "@nextui-org/react";
import type {
	FormSettings,
	GeneralSettingsProps,
	UserType,
} from "@/interfaces";
import { tabs, topics } from "@/constants";
import { FaRegQuestionCircle, FaSearch } from "react-icons/fa";
import type { Selection } from "@nextui-org/react";
import { SelectItem } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { useState, type FC } from "react";
import { createForm, getUsersByEmail, getUsersByName } from "@/services";
import { useTranslations } from "next-intl";
import { useDebouncedCallback } from "use-debounce";
import { getUserById } from "@/services/users/getUserById";
import { IoCloseCircleSharp } from "react-icons/io5";

export const GeneralSettings: FC<GeneralSettingsProps> = ({
	changeTab,
	setFormId,
}) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isFormPublic, setIsFormPublic] = useState(false);
	const [topicsState, setTopicsState] = useState<Selection>(new Set([]));
	const [image, setImage] = useState<File | null>(null);
	const [selectedUsers, setSelectedUsers] = useState<UserType[]>([]);
	const [inputValue, setInputValue] = useState("");
	const [users, setUsers] = useState<UserType[]>([]);
	const [searchingBy, setSearchingBy] = useState<Selection>(
		new Set(["username"]),
	);

	const { data: session } = useSession();
	const t = useTranslations("generalSettings");
	const t2 = useTranslations("CloudTags");

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

		const formId = await createForm(data, userId, selectedUsers, formData);

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

	const debouncedSearch = useDebouncedCallback(async (value: string) => {
		//@ts-ignore
		if (searchingBy.has("username")) {
			const users = await getUsersByName(value);
			if (users.length === 0) return setUsers([]);
			setUsers(users);
			return;
		}
		//@ts-ignore
		if (searchingBy.has("email")) {
			const users = await getUsersByEmail(value);
			if (users.length === 0) return setUsers([]);
			setUsers(users);
			return;
		}
	}, 700);

	const handleSearchInputChange = (value: string) => {
		setInputValue(value);
		debouncedSearch(value);
	};

	const selectUser = async (id: number) => {
		if (selectedUsers.find((user) => user.id === id)) return;
		const user = await getUserById(id);
		if (!user) return setInputValue("");
		setSelectedUsers([...selectedUsers, user]);
		setInputValue("");
	};

	const deleteSelectedUser = (id: number) => {
		const newUsers = selectedUsers.filter((user) => user.id !== id);
		setSelectedUsers(newUsers);
	};

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
					label={t("title")}
					{...register("title", {
						required: true,
					})}
				/>
				<Select
					isRequired
					radius="sm"
					label={t("topic")}
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
						label={t("addTopic")}
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
				label={t("description")}
				className="w-full"
				errorMessage="This field is required"
				endContent={
					<Tooltip
						content={<p className="p-2">This field supports markdown</p>}
					>
						<Button isIconOnly variant="light">
							<FaRegQuestionCircle size={20} />
						</Button>
					</Tooltip>
				}
				isInvalid={Boolean(errors.description)}
				{...register("description", {
					required: true,
				})}
			>
				Description
			</Textarea>

			<Select
				radius="sm"
				label={t("tags")}
				variant="bordered"
				selectionMode="multiple"
				className="w-full"
				{...register("tags")}
			>
				{tabs.map((tag) => (
					<SelectItem key={tag.id}>{t2(tag.value)}</SelectItem>
				))}
			</Select>
			<div
				{...getRootProps({ className: "dropzone" })}
				className="border-2 p-3 border-default-200 rounded-md cursor-pointer"
			>
				<label className="text-default-500">{t("addImage")}</label>
				<input type="file" className="w-full" {...getInputProps()} />

				<p className="text-default-500">
					{t("dropImage")}{" "}
					<span className="text-blue-600 font-semibold cursor-pointer">
						{t("clickHere")}
					</span>{" "}
					{t("toSelectFromYourDevice")}
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
				{t("makeFormPublic")}
			</Checkbox>
			{!isFormPublic && (
				<>
					<div className="flex mt-1 gap-3">
						<Select
							label={t("searchBy")}
							radius="sm"
							size="sm"
							variant="bordered"
							selectionMode="single"
							className="w-48"
							selectedKeys={searchingBy}
							onSelectionChange={setSearchingBy}
						>
							<SelectItem key="username">{t("name")}</SelectItem>
							<SelectItem key="email">{t("email")}</SelectItem>
						</Select>
						<Autocomplete
							aria-label="autocomplete"
							aria-labelledby="autocomplete-label"
							radius="sm"
							size="lg"
							isClearable
							startContent={<FaSearch />}
							placeholder="search"
							className="w-full"
							variant="bordered"
							inputValue={inputValue}
							onSelectionChange={(value) => selectUser(value as number)}
							onInputChange={(value) => handleSearchInputChange(value)}
						>
							{users.map((user) => (
								<AutocompleteItem
									key={user.id}
									textValue={`${user.name} ${user.email}`}
								>
									<User name={user.name} description={user.email} />
								</AutocompleteItem>
							))}
						</Autocomplete>
					</div>

					<div className="border-2 min-h-24 gap-2 p-4 w-full rounded-lg border-default-200 flex flex-col items-start sm:flex-wrap sm:flex-row sm:gap-4">
						{selectedUsers.map((user) => (
							<div
								key={user.id}
								className="flex items-start mb-1 border-default-200 border-2 rounded-lg p-2"
							>
								<User
									name={user.name}
									description={user.email}
									className="min-w-56 justify-start"
								/>
								<Button isIconOnly variant="light" color="danger">
									<IoCloseCircleSharp
										size={24}
										onClick={() => deleteSelectedUser(user.id)}
									/>
								</Button>
							</div>
						))}
					</div>
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
				{t("setQuestions")}
			</Button>
		</form>
	);
};
