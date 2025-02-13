import axios from "axios";
import { Questionnaire } from "../../share/types";
import { DataModelResponse } from "./types";
import * as config from "../../share/config";

export const getQuestionnaires = async () => {
	return new Promise<Questionnaire>((resolve, reject) => {
		(async () => {
			try {
				const response = await axios.get(
					`http://localhost:${config.getBackendPort()}/api/questionaires`
				);
				if (response.status === 200) {
					const questionnaires = response.data;
					resolve(questionnaires);
				}
			} catch (e: unknown) {
				reject(new Error(`ERROR: ${(e as Error).message}`));
			}
		})();
	});
};

export const saveSurveyResult = async (surveyResult: unknown) => {
	return new Promise<DataModelResponse>((resolve, reject) => {
		(async () => {
			try {
				const response = await axios.post(
					`http://localhost:${config.getBackendPort()}/api/survey-results`,
					surveyResult
				);
				if (response.status === 200) {
					resolve({
						message: `Survey result saved successfully`,
						success: true,
					});
				} else {
					resolve({
						message: `Failed to save survey result`,
						success: false,
					});
				}
			} catch (e: unknown) {
				reject(new Error(`ERROR: ${(e as Error).message}`));
			}
		})();
	});
};
