import type { useTranslations } from "next-intl";
import type { status } from "@/interfaces";
import toast from "react-hot-toast";

type TFunction = ReturnType<typeof useTranslations>;

export const handleStatus = (
	status: status,
	t: TFunction,
	redirectPage: string,
) => {
	if (status === "INVALID_CREDENTIALS") toast.error(t("invalidEmail"));

	if (status === "USER_EXISTS") toast.error(t("userAlreadyExists"));

	if (status === "USER_NOT_EXISTS") toast.error(t("userNotExists"));

	if (status === "INVALID_PASSWORD") toast.error(t("passwordDoesNotMatch"));

	if (status === "ERRORLOGIN") toast.error(t("errorLogin"));

	if (status === "ERROR") toast.error(t("serverError"));

	if (status === "INVALID_QUESTIONS") toast.error(t("invalidQuestions"));

	if (status === "SUCCESS") window.location.href = redirectPage;
};
