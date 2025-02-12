import { action, Action, thunk, Thunk } from "easy-peasy";
import { Questionnaire } from "../../../share/types";
import * as dataModel from "../dataModel";
import { StoreModel } from "../store";

export interface QuestionnaireModel {
	// state
	questionnaires: Questionnaire;
	currentQuestionId: string | null;

	// actions
	setQuestionnaires: Action<this, Questionnaire>;
	setCurrentQuestionId: Action<this, string | null>;

	// thunks
	loadQuestionnairesThunk: Thunk<this, void, void, StoreModel>;
}

export const questionnaireModel: QuestionnaireModel = {
	// state
	questionnaires: {},
	currentQuestionId: null,

	// actions
	setQuestionnaires: action((state, questionnaires) => {
		state.questionnaires = structuredClone(questionnaires);
	}),
	setCurrentQuestionId: action((state, questionId) => {
		state.currentQuestionId = questionId;
	}),

	// thunks
	loadQuestionnairesThunk: thunk(async (actions) => {
		try {
			const questionnaires = await dataModel.getQuestionnaires();
			actions.setQuestionnaires(questionnaires);
		} catch (error) {
			console.error('Failed to load questionnaires:', error);
		}
	}),
};
