import { Flashcard, Questionnaire, SurveyResult } from "../../share/types";

export type Database = {
	flashcards: Flashcard[];
	questionaires: Questionnaire;
	surveyResults: SurveyResult[];
};
