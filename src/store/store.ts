import { createStore } from "easy-peasy";
import { mainModel, MainModel } from "./models/mainModel";
import { flashcardModel, FlashcardModel } from "./models/flashcardModel";
import {
	questionnaireModel,
	QuestionnaireModel,
} from "./models/questionnaireModel";

export type StoreModel = {
	mainModel: MainModel;
	flashcardModel: FlashcardModel;
	questionnaireModel: QuestionnaireModel;
};

export const store = createStore<StoreModel>({
	mainModel,
	flashcardModel,
	questionnaireModel,
});
