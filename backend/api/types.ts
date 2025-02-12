import { Flashcard } from "../../share/types";

export type Database = {
	flashcards: Flashcard[];
	questionaires: Record<string, any[]>;
};
