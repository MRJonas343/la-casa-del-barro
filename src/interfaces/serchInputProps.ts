export interface SearchInputProps {
	value?: string;
	setValue?: (value: string) => void;
	placeholder?: string;
	size?: "sm" | "md" | "lg";
	classname?: string;
}
