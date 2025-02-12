import { join } from "path";
import { JSONFile } from "lowdb/node";
import { Low } from "lowdb";
import { Database } from "../types";

const projectBasePath = process.cwd();
const dbPathAndFileName = join(projectBasePath, "backend/data/db.json");
const adapter = new JSONFile<Database>(dbPathAndFileName);
const db: Low<Database> = new Low<Database>(adapter, {} as Database);
await db.read();

export const getAllQuestionnaires = () => {
    return db.data.questionaires;
}; 