import { answers } from "./schemas/answerSchema";
import { comments } from "./schemas/commentSchema";
import { filledForms } from "./schemas/filledFormSchema";
import { forms } from "./schemas/formSchema";
import { likes } from "./schemas/likeSchema";
import { questions } from "./schemas/questionSchema";
import { users } from "./schemas/userSchema";
import { accounts } from "./schemas/accountsSchema";
import { sessions } from "./schemas/sessionsSchema";
import { options } from "./schemas/optionsSchema";

export const tablesSchemas = {
	users,
	forms,
	questions,
	accounts,
	sessions,
	answers,
	filledForms,
	comments,
	likes,
	options,
};
