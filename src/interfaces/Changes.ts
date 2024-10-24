export interface Changes {
	questionId: number;
	fieldChanged: string;
	newValue: string | boolean;
	options?: optionsToUpdate;
}

interface optionsToUpdate {
	optionsToDelete: number[];
	optionsToAdd: number[];
}
