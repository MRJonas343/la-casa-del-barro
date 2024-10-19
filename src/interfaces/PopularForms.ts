export interface PopularForm {
	id: number;
	title: string;
	authorName: string;
	imageUrl: string;
	answerTimes: number;
}

export interface PopularForms {
	popularForms: PopularForm[];
}
