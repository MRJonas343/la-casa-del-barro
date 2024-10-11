"use client";

import { handleAuthStatus } from "@/utils/handleAuthStatus";
import type { User } from "@/interfaces/UserCredentials";
import { Button, Input, Link } from "@nextui-org/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { createUser } from "@/services";
import { useState } from "react";

export const RegisterForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};

	const t = useTranslations("auth");

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
		watch,
	} = useForm<User>();

	const password = watch("password");

	const onSubmit = async (data: User) => {
		setIsSubmitting(true);
		const authStatus = await createUser(data.name, data.email, data.password);
		handleAuthStatus(authStatus, t);
		setIsSubmitting(false);
		reset();
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-4  max-w-[600px] w-[95%]"
		>
			<Input
				radius="sm"
				size="lg"
				variant="bordered"
				isInvalid={Boolean(errors.name)}
				errorMessage={t("invalidName")}
				autoFocus
				placeholder={t("name")}
				{...register("name", {
					required: true,
					minLength: 1,
					maxLength: 50,
				})}
			/>
			<Input
				radius="sm"
				size="lg"
				variant="bordered"
				isInvalid={Boolean(errors.email)}
				errorMessage={t("invalidEmail")}
				placeholder={t("email")}
				{...register("email", {
					required: true,
					maxLength: 40,
					pattern: /^\S+@\S+$/i,
				})}
			/>
			<Input
				radius="sm"
				size="lg"
				variant="bordered"
				isInvalid={Boolean(errors.password)}
				errorMessage={t("invalidPassword")}
				type={isPasswordVisible ? "text" : "password"}
				endContent={
					<button
						className="focus:outline-none"
						type="button"
						onClick={togglePasswordVisibility}
						aria-label="toggle password visibility"
					>
						{isPasswordVisible ? (
							<FaEye className="text-2xl text-default-400 pointer-events-none" />
						) : (
							<FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
						)}
					</button>
				}
				placeholder={t("password")}
				{...register("password", {
					required: true,
					minLength: 8,
					maxLength: 40,
				})}
			/>
			<Input
				radius="sm"
				size="lg"
				variant="bordered"
				type="password"
				placeholder="Confirm password"
				errorMessage={t("passwordIsNotTheSame")}
				validate={(value) => value === password || "Passwords do not match"}
			/>

			<Button
				color="primary"
				variant="shadow"
				size="lg"
				radius="sm"
				isLoading={isSubmitting}
				type="submit"
				className="text-xl font-semibold"
			>
				{t("register")}
			</Button>
			{/* <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-700 after:mt-0.5 after:flex-1 after:border-t after:border-gray-700">
				<p className="mx-4 mb-0 text-center"> Or login with </p>
			</div> */}

			<p className="text-center pt-2">{t("haveAccount")}</p>

			<Link
				color="primary"
				size="lg"
				className="text-xl font-semibold flex justify-center cursor-pointer"
				href="/login"
			>
				{t("loginHere")}
			</Link>
		</form>
	);
};
