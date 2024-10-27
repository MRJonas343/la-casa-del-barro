import type { FormeResults } from "@/interfaces";

export const formatDataForNumericBarChart = (questionData: FormeResults) => {
	if (questionData.type !== "numeric") return [];

	const numberCounts: Record<number, number> = {};

	for (const answer of questionData.answers) {
		if (typeof answer === "number") {
			numberCounts[answer] = (numberCounts[answer] || 0) + 1;
		}
	}

	return Object.entries(numberCounts).map(([number, count]) => ({
		number: Number(number),
		Count: count,
	}));
};
