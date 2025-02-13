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
	const [currentAnswer, setCurrentAnswer] = useState<number | null>(null);

	if (!questionnaireId || !questionnaires[questionnaireId]) {
		return <div>Questionnaire not found</div>;
	}

	const questions = questionnaires[questionnaireId];
	const currentQuestion = questions[currentQuestionIndex];

	const handleNext = () => {
		setCurrentAnswer(null);
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(prev => prev + 1);
		} else {
			navigate('/questionnaire');
		}
	};

	const renderQuestionContent = () => {
		if (currentQuestion.type === 'range') {
			return (
				<div className="space-y-2">
					<div>{currentQuestion.idCode}</div>
					<div className="flex items-center space-x-4">
						<input
							type="range"
							min={currentQuestion.minimum}
							max={currentQuestion.maximum}
							value={currentAnswer ?? currentQuestion.minimum}
							onChange={(e) => setCurrentAnswer(Number(e.target.value))}
							className="w-full"
						/>
						<span className="w-12 text-center">
							{currentAnswer ?? currentQuestion.minimum}
						</span>
					</div>
				</div>
			);
		}
		return <div>{currentQuestion.idCode}</div>;
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