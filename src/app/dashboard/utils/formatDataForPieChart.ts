import type { FormeResults } from "@/interfaces";

export const formatDataForPieChart = (questionData: FormeResults) => {
	if (questionData.type !== "single") return [];

	const trueCount = questionData.answers.filter(
		(answer) => answer === true,
	).length;
	const falseCount = questionData.answers.filter(
		(answer) => answer === false,
	).length;

	return [
		{ name: "Yes", amount: trueCount },
		{ name: "No", amount: falseCount },
	];
};
