import { useTypedStoreState } from "../store/hooks";
import { useNavigate } from "react-router-dom";

export const PageQuestionnaire = () => {
	const { questionnaires } = useTypedStoreState(
		(state) => state.questionnaireModel
	);
	const navigate = useNavigate();

	return (
		<div className="space-y-6">
			<h2 className="text-xl mb-4">Available Medical Consultations</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{Object.keys(questionnaires).map((questionnaireId) => (
					<div
						key={questionnaireId}
						onClick={() => navigate(`/questionnaire/${questionnaireId}`)}
						className="bg-white p-4 rounded-lg shadow-sm hover:bg-green-50 cursor-pointer transition-colors"
					>
						<h3 className="text-lg font-medium capitalize">
							{questionnaireId.replace(/([A-Z])/g, ' $1').trim()}
						</h3>
						<p className="text-sm text-gray-500 mt-1">
							Click to start consultation
						</p>
					</div>
				))}
			</div>
		</div>
	);
}; 