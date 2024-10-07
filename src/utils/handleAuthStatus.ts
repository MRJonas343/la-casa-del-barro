import type { useTranslations } from "next-intl";
import type { authStatus } from "@/interfaces";
import toast from "react-hot-toast";

type TFunction = ReturnType<typeof useTranslations>;

export const handleAuthStatus = (authStatus: authStatus, t: TFunction) => {
	if (authStatus === "INVALID_CREDENTIALS") toast.error(t("invalidEmail"));

	if (authStatus === "USER_EXISTS") toast.error(t("userAlreadyExists"));

	if (authStatus === "USER_NOT_EXISTS") toast.error(t("userNotExists"));

	if (authStatus === "INVALID_PASSWORD") toast.error(t("passwordDoesNotMatch"));

	if (authStatus === "ERRORLOGIN") toast.error(t("errorLogin"));

	if (authStatus === "ERROR") toast.error(t("serverError"));

	if (authStatus === "SUCCESS") window.location.href = "/my-forms";
};
