"use client";

import { Button, Input, Link } from "@nextui-org/react";
import type { UserCredentials } from "@/interfaces";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { authorize } from "@/services";
import { handleStatus } from "@/utils";
import { useState } from "react";

export const LoginForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const t = useTranslations("auth");

	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<UserCredentials>();

	const onSubmit = async (data: UserCredentials) => {
		setIsSubmitting(true);
		const status = await authorize(data.email, data.password);
		handleStatus(status, t, "/dashboard");
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
				isInvalid={Boolean(errors.email)}
				errorMessage={t("invalidEmail")}
				autoFocus
				placeholder="Email"
				{...register("email", {
					required: true,
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
				})}
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
				{t("login")}
			</Button>
			{/* <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-700 after:mt-0.5 after:flex-1 after:border-t after:border-gray-700">
				<p className="mx-4 mb-0 text-center"> Or login with </p>
			</div> */}
			<p className="text-center pt-2">{t("notAccount")}</p>
			<Link
				color="primary"
				size="lg"
				className="text-xl font-semibold flex justify-center cursor-pointer"
				href="/register"
			>
				{t("getAccount")}
			</Link>
		</form>
	);
};
