/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTypedStoreState, useTypedStoreActions } from "../store/hooks";

export const PageQuestionnaireDetail = () => {
	const { questionnaireId } = useParams();
	const navigate = useNavigate();
	const { questionnaires } = useTypedStoreState(
		(state) => state.questionnaireModel
	);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [currentAnswers, setCurrentAnswers] = useState<Record<string, number | string>>(() => ({
		questionnaireId: questionnaireId!,
		whenTaken: new Date().toISOString()
	}));
	const { saveSurveyResultToDatasourceThunk } = useTypedStoreActions(
		(actions: any) => actions.surveyResultModel
	);

	const supportedTypes = ["range"] as const;

	if (!questionnaireId || !questionnaires[questionnaireId]) {
		return <div>Questionnaire not found</div>;
	}

	const allQuestions = questionnaires[questionnaireId];
	// Filter questions to only include supported types
	const questions = allQuestions.filter(q => supportedTypes.includes(q.type as any));
	const currentQuestion = questions[currentQuestionIndex];
	// Get default value for range questions
	const getDefaultValue = (question: typeof currentQuestion) => {
		if (question.type === 'range') {
			return Math.floor((question.maximum + question.minimum) / 2);
		}
		return 0;
	};

	// Initialize answer with middle value if not set
	const currentValue = currentAnswers[currentQuestion.idCode] ??
		(currentQuestion.type === 'range' ? getDefaultValue(currentQuestion) : 0);

	const handleNext = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(prev => prev + 1);
		} else {
			navigate('/questionnaire');
		}
	};

	const renderQuestionContent = () => {
		if (currentQuestion.type === 'range') {
			return (
				<div className="space-y-4">
					<div>{currentQuestion.text}</div>
					<div className="flex flex-col space-y-2">
						<div className="flex items-center justify-between">
							<span className="text-sm text-gray-600">
								{currentQuestion.minimumLabel}
							</span>
							<span className="text-sm text-gray-600">
								{currentQuestion.maximumLabel}
							</span>
						</div>
						<input
							type="range"
							min={currentQuestion.minimum}
							max={currentQuestion.maximum}
							value={currentValue}
							onChange={(e) => {
								const newAnswers = {
									...currentAnswers,
									[currentQuestion.idCode]: Number(e.target.value)
								};
								setCurrentAnswers(newAnswers);
								saveSurveyResultToDatasourceThunk(newAnswers);
							}}
							className="w-full accent-blue-500"
						/>
						<div className="text-center text-sm text-black">
							{currentValue}{currentQuestion.valueSuffix}
						</div>
					</div>
				</div>
			);
		}
		return <div>{currentQuestion.text}</div>;
	};

	return (
		<div className="space-y-6">
			<h2 className="text-xl mb-4 capitalize">
				{questionnaireId.replace(/([A-Z])/g, ' $1').trim()} Consultation
			</h2>
			<div className="space-y-4">
				{currentQuestionIndex < questions.length ? (
					<>
						<div key={currentQuestionIndex} className="p-4 border rounded">
							{renderQuestionContent()}
						</div>
						{/* Debug display of all answers */}
						<div className="p-4 bg-gray-100 rounded">
							<h3 className="font-bold mb-2">Debug - Current Answers:</h3>
							<pre>{JSON.stringify(currentAnswers, null, 2)}</pre>
						</div>
						<button
							onClick={handleNext}
							className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
						>
							{currentQuestionIndex < questions.length - 1
								? "Next Question"
								: "Finish"}
						</button>
					</>
				) : (
					<div className="p-4 text-green-500 text-xl">Finished!</div>
				)}
			</div>
		</div>
	);
}; 