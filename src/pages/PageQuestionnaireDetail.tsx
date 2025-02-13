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
			const currentValue = currentAnswers[currentQuestion.idCode] ?? currentQuestion.minimum;
			return (
				<div className="space-y-2">
					<div>{currentQuestion.text}</div>
					<div className="flex items-center space-x-4">
						<input
							type="range"
							min={currentQuestion.minimum}
							max={currentQuestion.maximum}
							value={currentValue}
							onChange={(e) => setCurrentAnswers(prev => ({
								...prev,
								[currentQuestion.idCode]: Number(e.target.value)
							}))}
							className="w-full"
						/>
						<span className="w-12 text-center">
							{currentValue}
						</span>
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