import { FlashcardArea } from "../components/FlashcardArea";
import { useTypedStoreState } from "../store/hooks";
import { NavLink } from "react-router-dom";

export const PageWelcome = () => {
	const { message } = useTypedStoreState((state) => state.mainModel);

	return (
		<>
			<p className="mb-3">{message}</p>
			<div className="space-y-6">
				<FlashcardArea />

				<div className="mt-8 p-4 bg-slate-600 rounded-lg">
					<h3 className="text-lg text-white mb-2">Need a Hair Transplant Consultation?</h3>
					<p className="text-slate-200 mb-4">Take our quick questionnaire to evaluate your case.</p>
					<NavLink to="/questionnaire" className="btn-small bg-white">
						Start Questionnaire →
					</NavLink>
				</div>
			</div>
		</>
	);
};
