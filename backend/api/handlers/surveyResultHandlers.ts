import { join } from "path";
import { JSONFile } from "lowdb/node";
import { Low } from "lowdb";
import { SurveyResult } from "../../../share/types";
import { Database } from "../types";

const projectBasePath = process.cwd();
const dbPathAndFileName = join(projectBasePath, "backend/data/db.json");
const adapter = new JSONFile<Database>(dbPathAndFileName);
const db: Low<Database> = new Low<Database>(adapter, {} as Database);
await db.read();

export const saveSurveyResult = async (result: SurveyResult) => {
    const existingIndex = db.data.surveyResults.findIndex(
        sr => sr.questionnaireId === result.questionnaireId && 
             sr.whenTaken === result.whenTaken
    );

    if (existingIndex !== -1) {
        // Replace existing result
        db.data.surveyResults[existingIndex] = result;
    } else {
        // Add new result
        db.data.surveyResults.push(result);
    }

    await db.write();
    return result;
}; 