import { Questionnaire, SurveyResult } from "../../share/types";

export type Database = {
	questionnaires: Questionnaire;
	surveyResults: SurveyResult[];
};
