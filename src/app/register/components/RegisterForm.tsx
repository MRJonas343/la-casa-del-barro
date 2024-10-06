"use client";

import type { User } from "@/interfaces/UserCredentials";
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { createUser } from "@/services/auth/createUser";

const RegisterForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formError, setFormError] = useState<string | null>(null);

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<User>();

	const onSubmit = async (data: User) => {
		setIsSubmitting(true);
		reset();
		const authStatus = await createUser(data.name, data.email, data.password);

		if (authStatus === "INVALID_CREDENTIALS")
			setFormError("Ups, invalid credentials");

		if (authStatus === "USER_EXISTS")
			setFormError("Ups, email already exists, try another one");

		if (authStatus === "ERROR") setFormError("Ups, something went wrong");

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
				isInvalid={Boolean(errors.name)}
				errorMessage="Invalid name"
				autoFocus
				placeholder="Name"
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
				errorMessage="Invalid email"
				autoFocus
				placeholder="Email"
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
				errorMessage="The the password should be at least 8 characters"
				type="password"
				placeholder="Password"
				{...register("password", {
					required: true,
					minLength: 8,
					maxLength: 40,
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
export default RegisterForm;
