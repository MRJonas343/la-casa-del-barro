export interface FormDataToUpdate {
	formGeneralData: FormGeneralData;
	questions: Question[];
}

export interface FormGeneralData {
	form: Form;
	usersWithPermissions: UsersWithPermission[];
}

export interface Form {
	id: number;
	author_id: number;
	created_at: Date;
	title: string;
	topic: string;
	description: string;
	isPublic: boolean;
	imageUrl: string;
}

export interface UsersWithPermission {
	id: number;
	name: string;
	email: string;
}

export interface Question {
	id: number;
	question: string;
	description: string | null;
	displayInTable: boolean;
	order: number;
	type: string;
}
