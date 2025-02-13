import { thunk, Thunk } from "easy-peasy";
import { SurveyResult } from "../types";
import * as dataModel from "../dataModel";
import { StoreModel } from "../store";

export interface SurveyResultModel {
	// thunks
	saveSurveyResultToDatasourceThunk: Thunk<
		this,
		SurveyResult,
		void,
		StoreModel
	>;
}

export const surveyResultModel: SurveyResultModel = {
	// thunks
	saveSurveyResultToDatasourceThunk: thunk(
		async (_, surveyResult, helpers) => {
			try {
				const dataModelResponse =
					await dataModel.saveSurveyResult(surveyResult);
				if (dataModelResponse.success) {
					helpers
						.getStoreActions()
						.mainModel.setMessage(dataModelResponse.message);
				} else {
					helpers
						.getStoreActions()
						.mainModel.setMessage(dataModelResponse.message);
					console.log(dataModelResponse.message);
				}
			} catch (e: unknown) {
				helpers
					.getStoreActions()
					.mainModel.setMessage(
						`ERROR: Survey result could not be saved`
					);
				console.error((e as Error).message, e);
			}
		}
	),
};
