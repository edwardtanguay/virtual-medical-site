import { useTypedStoreState } from "../store/hooks";

export const PageQuestionnaire = () => {
	const { questionnaires } = useTypedStoreState(
		(state) => state.questionnaireModel
	);

	return (
		<div className="space-y-6">
			<h2 className="text-xl mb-2">Available Questionnaires</h2>
			<div className="space-y-4">
				{Object.keys(questionnaires).map((questionnaireId) => (
					<div
						key={questionnaireId}
						className="bg-white p-4 rounded-lg shadow-sm"
					>
						<h3 className="text-lg font-medium mb-2">
							{questionnaireId}
						</h3>
						<div className="space-y-2">
							{questionnaires[questionnaireId].map((question, index) => (
								<div key={index} className="flex items-center gap-2 text-gray-600">
									<span className="font-mono text-sm">{question.idCode}</span>
									<span className="text-gray-400">-</span>
									<span>{question.text}</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}; 