import { Router } from "express";
import * as surveyResultHandler from "../handlers/surveyResultHandlers";
import { SurveyResult } from "../../../share/types";

export const surveyResultRouter = Router();

surveyResultRouter.post("/", async (req, res) => {
	const surveyResult: SurveyResult = req.body;
	const savedResult =
		await surveyResultHandler.saveSurveyResult(surveyResult);
	res.json(savedResult);
});
