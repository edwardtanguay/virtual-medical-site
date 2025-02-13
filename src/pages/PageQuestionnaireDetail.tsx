import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTypedStoreState } from "../store/hooks";

export const PageQuestionnaireDetail = () => {
	const { questionnaireId } = useParams();
	const navigate = useNavigate();
	const { questionnaires } = useTypedStoreState(
		(state) => state.questionnaireModel
	);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [currentAnswers, setCurrentAnswers] = useState<Record<string, number>>({});

	if (!questionnaireId || !questionnaires[questionnaireId]) {
		return <div>Questionnaire not found</div>;
	}

	const questions = questionnaires[questionnaireId];
	const currentQuestion = questions[currentQuestionIndex];

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
							value={currentAnswers[currentQuestion.idCode] ?? currentQuestion.minimum}
							onChange={(e) => setCurrentAnswers(prev => ({
								...prev,
								[currentQuestion.idCode]: Number(e.target.value)
							}))}
							className="w-full accent-blue-500"
							dir="rtl"
						/>
						<div className="text-center font-medium text-lg">
							{currentAnswers[currentQuestion.idCode] ?? currentQuestion.minimum}
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