import { Router } from "express";
import * as questionnaireHandler from "../handlers/questionnaireHandlers";

export const questionnaireRouter = Router();

questionnaireRouter.get("/", (_req, res) => {
	res.json(questionnaireHandler.getAllQuestionnaires());
});
