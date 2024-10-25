export interface ModalWithFillFormsProps {
	formId: number;
	isOpen: boolean;
	onOpen: () => void;
	onOpenChange: (isOpen: boolean) => void;
}

export interface FilledForms {
	userId: number;
	userName: string;
	filledAt: string;
}
