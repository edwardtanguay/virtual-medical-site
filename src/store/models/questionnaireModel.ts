import { action, Action, thunk, Thunk } from "easy-peasy";
import axios from "axios";
import { Questionnaires } from "../../../share/types";
import * as config from "../../../share/config";
import { StoreModel } from "../store";
import * as dataModel from "../dataModel";

export interface QuestionnaireModel {
	// state
	questionnaires: Record<string, any[]>;
	isLoading: boolean;
	error: string | null;

	// actions
	setQuestionnaires: Action<this, Record<string, any[]>>;
	setLoading: Action<this, boolean>;
	setError: Action<this, string | null>;

	// thunks
	loadQuestionnairesThunk: Thunk<this>;
}

export const questionnaireModel: QuestionnaireModel = {
	// state
	questionnaires: {},
	isLoading: false,
	error: null,

	// actions
	setQuestionnaires: action((state, questionnaires) => {
		state.questionnaires = questionnaires;
	}),
	setLoading: action((state, isLoading) => {
		state.isLoading = isLoading;
	}),
	setError: action((state, error) => {
		state.error = error;
	}),

	// thunks
	loadQuestionnairesThunk: thunk((actions) => {
		(async () => {
			const questionnaires = await dataModel.getQuestionnaires();
			actions.setQuestionnaires(questionnaires);
		})();
	}),
};
