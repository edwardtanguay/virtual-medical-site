import { createStore } from "easy-peasy";
import { mainModel, MainModel } from "./models/mainModel";
import {
	questionnaireModel,
	QuestionnaireModel,
} from "./models/questionnaireModel";
import {
	surveyResultModel,
	SurveyResultModel,
} from "./models/surveyResultModel";

export type StoreModel = {
	mainModel: MainModel;
	questionnaireModel: QuestionnaireModel;
	surveyResultModel: SurveyResultModel;
};

export const store = createStore<StoreModel>({
	mainModel,
	questionnaireModel,
	surveyResultModel,
});
