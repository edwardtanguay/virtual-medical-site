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
					<div key={index} className="p-4 border rounded">
						{question.idCode}
					</div>
				))}
			</div>
		</div>
	);
}; 