import { z } from "zod";

export const NewFlashcardSchema = z.object({
	category: z.string(),
	front: z.string(),
	back: z.string(),
});

export type NewFlashcard = z.infer<typeof NewFlashcardSchema>;

export const FlashcardSchema = NewFlashcardSchema.extend({
	suuid: z
		.string()
		.length(6, "suuid must be exactly 6 characters long")
		.regex(/^[A-Za-z0-9]+$/, "suuid can only contain uppercase/lowercase letters and numbers"),
});

export const FrontendFlashcardSchema = FlashcardSchema.extend({
	isOpen: z.boolean(),
});

export type Flashcard = z.infer<typeof FlashcardSchema>;
export type FrontendFlashcard = z.infer<typeof FrontendFlashcardSchema>;

export const PatchFlashcardSchema = NewFlashcardSchema.partial();

export type PatchFlashcard = z.infer<typeof PatchFlashcardSchema>;

export type QuestionnaireQuestion = {
	idCode: string;
	type: string;
	text: string;
	next?: Record<string, string> | string;
	minimum?: number;
	maximum?: number;
	minimumLabel?: string;
	maximumLabel?: string;
	choices?: string[];
};

export type Questionnaires = {
	[key: string]: QuestionnaireQuestion[];
};

