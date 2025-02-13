import { z } from "zod";

export type QuestionnaireQuestion = {
	idCode: string;
	type: string;
	text: string;
	next?: Record<string, string> | string;
	minimum?: number;
	maximum?: number;
	minimumLabel?: string;
	maximumLabel?: string;
	valueSuffix?: string;
	choices?: string[];
};

export type Questionnaires = {
	[key: string]: QuestionnaireQuestion[];
};

// Base schema for all questionnaire items
export const QuestionnaireItemBaseSchema = z.object({
	idCode: z.string(),
	type: z.enum(["range", "number", "multipleChoice", "cancel", "saveAndEnd"]),
	text: z.string(),
});

// Schema for range type questions
export const RangeQuestionSchema = QuestionnaireItemBaseSchema.extend({
	type: z.literal("range"),
	minimum: z.number(),
	maximum: z.number(),
	minimumLabel: z.string(),
	maximumLabel: z.string(),
	valueSuffix: z.string().optional(),
	next: z.record(z.string(), z.string()),
});

// Schema for number type questions
export const NumberQuestionSchema = QuestionnaireItemBaseSchema.extend({
	type: z.literal("number"),
	next: z.record(z.string(), z.string()),
});

// Schema for multiple choice questions
export const MultipleChoiceQuestionSchema = QuestionnaireItemBaseSchema.extend({
	type: z.literal("multipleChoice"),
	choices: z.array(z.string()),
	next: z.string(),
});

// Schema for cancel type messages
export const CancelMessageSchema = QuestionnaireItemBaseSchema.extend({
	type: z.literal("cancel"),
});

// Schema for save and end messages
export const SaveAndEndMessageSchema = QuestionnaireItemBaseSchema.extend({
	type: z.literal("saveAndEnd"),
});

// Union of all questionnaire item types
export const QuestionnaireItemSchema = z.discriminatedUnion("type", [
	RangeQuestionSchema,
	NumberQuestionSchema,
	MultipleChoiceQuestionSchema,
	CancelMessageSchema,
	SaveAndEndMessageSchema,
]);

// Schema for the entire questionnaire structure
export const QuestionnaireSchema = z.record(
	z.string(),
	z.array(QuestionnaireItemSchema)
);

// Export types
export type QuestionnaireItem = z.infer<typeof QuestionnaireItemSchema>;
export type RangeQuestion = z.infer<typeof RangeQuestionSchema>;
export type NumberQuestion = z.infer<typeof NumberQuestionSchema>;
export type MultipleChoiceQuestion = z.infer<
	typeof MultipleChoiceQuestionSchema
>;
export type CancelMessage = z.infer<typeof CancelMessageSchema>;
export type SaveAndEndMessage = z.infer<typeof SaveAndEndMessageSchema>;
export type Questionnaire = z.infer<typeof QuestionnaireSchema>;

export type SurveyResult = {
	questionnaireId: string;
	whenTaken: string;
	[key: string]: string | number; // Allow for dynamic question answers
};
