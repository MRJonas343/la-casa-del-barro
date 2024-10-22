import {
	Button,
	Checkbox,
	Input,
	Select,
	SelectItem,
	Textarea,
	Tooltip,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import type { Selection } from "@nextui-org/react";
import { tabs, topics, usersExamples } from "@/constants";
import { FaRegQuestionCircle } from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import { SearchInput } from "@/components";
import type { FormGeneralData } from "@/interfaces/formDataToUpdate";
import { useForm } from "react-hook-form";
import type { FormSettingsType } from "@/interfaces";

const FormSettings = ({ data }: { data: FormGeneralData }) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isFormPublic, setIsFormPublic] = useState(false);
	const [topicsState, setTopicsState] = useState<Selection>(new Set([]));
	const [image, setImage] = useState<File | null>(null);

	const t = useTranslations("generalSettings");
	const t2 = useTranslations("CloudTags");

	const { getRootProps, getInputProps } = useDropzone({
		maxFiles: 1,
		accept: {
			"image/*": [".png", ".jpg", ".jpeg", ".webp"],
		},
		onDrop: (acceptedFiles) => setImage(acceptedFiles[0]),
	});

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FormSettingsType>();

	return (
		<form
			//onSubmit={handleSubmit(onSubmit)}
			className="mt-4 flex flex-col gap-3 w-[90%] sm:w-[95%] mx-auto max-w-[1240px]"
		>
			<div className="md:flex md:gap-8">
				<Input
					isRequired
					autoFocus
					defaultValue={data.form.title}
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
					//isInvalid={Boolean(errors.topic)}
					selectedKeys={topicsState}
					onSelectionChange={setTopicsState}
					errorMessage="This field is required"
					selectionMode="single"
					className="w-full mt-3 md:mt-0"
					// {...register("topic", {
					//   required: true,
					// })}
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
						// isInvalid={Boolean(errors.otherTopic)}
						// {...register("otherTopic", {
						//   //@ts-ignore
						//   required: topicsState.has("Other"),
						// })}
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
				// isInvalid={Boolean(errors.description)}
				// {...register("description", {
				//   required: true,
				// })}
			>
				Description
			</Textarea>

			<Select
				radius="sm"
				label={t("tags")}
				variant="bordered"
				selectionMode="multiple"
				className="w-full"
				// {...register("tags")}
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
				// {...register("isPublic")}
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
						>
							<SelectItem key="username">{t("name")}</SelectItem>
							<SelectItem key="email">{t("email")}</SelectItem>
						</Select>
						<SearchInput
							placeholder={t("searchUsers")}
							size="lg"
							classname="mx-o"
						/>
					</div>
					<Select
						items={usersExamples}
						label={t("assignedTo")}
						variant="bordered"
						isMultiline={true}
						selectionMode="multiple"
						placeholder="Select Users"
						labelPlacement="outside"
						className="w-full"
						classNames={{
							trigger: "min-h-12 py-2",
						}}
						// {...register("users")}
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
				{t("setQuestions")}
			</Button>
		</form>
	);
};
export default FormSettings;
