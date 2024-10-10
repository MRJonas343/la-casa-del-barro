export const addOption = (
	id: string,
	options: string[],
	onOptionsChange: (id: string, options: string[]) => void,
) => {
	onOptionsChange(id, [...options, ""]);
};

export const updateOption = (
	id: string,
	index: number,
	value: string,
	options: string[],
	onOptionsChange: (id: string, options: string[]) => void,
) => {
	const newOptions = [...options];
	newOptions[index] = value;
	onOptionsChange(id, newOptions);
};

export const deleteOption = (
	id: string,
	index: number,
	options: string[],
	onOptionsChange: (id: string, options: string[]) => void,
) => {
	const newOptions = options.filter((_, i) => i !== index);
	onOptionsChange(id, newOptions);
};
