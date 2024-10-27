import type { FormeResults } from "@/interfaces";

export const formatDataForBarChart = (questionData: FormeResults) => {
	if (!questionData.options) return [];

	const optionCounts = questionData.options.map((option) => ({
		option,
		count: questionData.answers.filter((answer) => answer === option).length,
	}));

	return optionCounts.map(({ option, count }) => ({
		option,
		Count: count,
	}));
};
