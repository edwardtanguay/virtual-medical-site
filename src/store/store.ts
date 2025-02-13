import { createStore } from "easy-peasy";
import { mainModel, MainModel } from "./models/mainModel";
import { flashcardModel, FlashcardModel } from "./models/flashcardModel";
import {
	questionnaireModel,
	QuestionnaireModel,
} from "./models/questionnaireModel";
import { surveyResultModel, SurveyResultModel } from "./models/surveyResultModel";

export type StoreModel = {
	mainModel: MainModel;
	flashcardModel: FlashcardModel;
	questionnaireModel: QuestionnaireModel;
	surveyResultModel: SurveyResultModel;
};

export const store = createStore<StoreModel>({
	mainModel,
	flashcardModel,
	questionnaireModel,
	surveyResultModel,
});
