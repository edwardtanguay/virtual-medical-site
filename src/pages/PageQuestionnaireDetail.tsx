import { useParams } from "react-router-dom";
import { useTypedStoreState } from "../store/hooks";

export const PageQuestionnaireDetail = () => {
	const { questionnaireId } = useParams();
	const { questionnaires } = useTypedStoreState(
		(state) => state.questionnaireModel
	);

	if (!questionnaireId || !questionnaires[questionnaireId]) {
		return <div>Questionnaire not found</div>;
	}

	const questions = questionnaires[questionnaireId];

	return (
		<div className="space-y-6">
			<h2 className="text-xl mb-4 capitalize">
				{questionnaireId.replace(/([A-Z])/g, ' $1').trim()} Consultation
			</h2>
			<div className="space-y-4">
				{questions.map((question, index) => (
					<div
						key={index}
						className="bg-white p-4 rounded-lg shadow-sm"
					>
						<div className="text-sm text-gray-500 mb-1">
							{question.type}
						</div>
						<div className="text-lg">{question.text}</div>
						{question.choices && (
							<div className="mt-2 space-y-2">
								{question.choices.map((choice, idx) => (
									<div
										key={idx}
										className="text-gray-600 ml-4"
									>
										• {choice}
									</div>
								))}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}; 