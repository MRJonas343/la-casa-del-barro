"use client";

import type { UserCredentials } from "@/interfaces/UserCredentials";
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { authorize } from "@/services/auth/authorize";

const LoginForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formError, setFormError] = useState<string | null>(null);

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<UserCredentials>();

	const onSubmit = async (data: UserCredentials) => {
		setIsSubmitting(true);
		reset();
		const authStatus = await authorize(data.email, data.password);
		if (authStatus === "ERRORLOGIN") setFormError("Invalid email or password");

		if (authStatus === "CREDENTIALSERROR") setFormError("server error");

		if (authStatus === "SUCCESS" && typeof window !== "undefined") {
			window.location.href = "/";
		}
		setIsSubmitting(false);
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
				errorMessage="Invalid email"
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
				errorMessage="The the password should be at least 8 characters"
				type="password"
				placeholder="Password"
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
				Log in
			</Button>
			{/* <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-700 after:mt-0.5 after:flex-1 after:border-t after:border-gray-700">
				<p className="mx-4 mb-0 text-center"> Or login with </p>
			</div> */}

			<p className="text-[#f31260] text-sm text-center">{formError}</p>
		</form>
	);
};
export default LoginForm;
