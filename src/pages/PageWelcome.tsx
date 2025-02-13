import { NavLink } from "react-router-dom";
import {
	MagnifyingGlassIcon,
	ChatBubbleBottomCenterTextIcon,
	ClipboardDocumentCheckIcon,
	BuildingOffice2Icon,
	HeartIcon
} from "@heroicons/react/24/outline";

export const PageWelcome = () => {

	return (
		<>
			<div className="space-y-6">

				<section className="my-3">
					<h2 className="text-2xl font-semibold mb-6">How It Works</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-white p-6 rounded-lg shadow-sm">
							<div className="flex items-center gap-2 mb-2">
								<h3 className="text-lg font-medium">1. Browse</h3>
								<MagnifyingGlassIcon className="w-6 h-6 text-blue-500" />
							</div>
							<p className="text-gray-600">
								Take a look through our extensive database of clinics and treatments. Compare options
								to find what suits you best.
							</p>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-sm">
							<div className="flex items-center gap-2 mb-2">
								<h3 className="text-lg font-medium">2. Get in Touch</h3>
								<ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-blue-500" />
							</div>
							<p className="text-gray-600">
								Found something interesting? Contact us to discuss your options. Our team is here
								to answer all your questions.
							</p>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-sm">
							<div className="flex items-center gap-2 mb-2">
								<h3 className="text-lg font-medium">3. Getting Ready</h3>
								<ClipboardDocumentCheckIcon className="w-6 h-6 text-blue-500" />
							</div>
							<p className="text-gray-600">
								Once you've chosen a clinic, we'll help prepare you for the procedure with
								detailed information and support.
							</p>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-sm">
							<div className="flex items-center gap-2 mb-2">
								<h3 className="text-lg font-medium">4. At the Clinic</h3>
								<BuildingOffice2Icon className="w-6 h-6 text-blue-500" />
							</div>
							<p className="text-gray-600">
								Your chosen clinic will guide you through the procedure. We'll be available
								if you need any assistance.
							</p>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-sm">
							<div className="flex items-center gap-2 mb-2">
								<h3 className="text-lg font-medium">5. Road to Recovery</h3>
								<HeartIcon className="w-6 h-6 text-blue-500" />
							</div>
							<p className="text-gray-600">
								Follow your recovery plan and keep in touch with your clinic. We're here to
								support you throughout the healing process.
							</p>
						</div>
					</div>
				</section>

				<div className="mt-8 p-4 bg-slate-600 rounded-lg">
					<h3 className="text-lg text-white mb-2">Need a Hair Transplant Consultation?</h3>
					<p className="text-slate-200 mb-4">Take our quick questionnaire to evaluate your case.</p>
					<NavLink to="/questionnaire" className="btn-small bg-green-200 hover:bg-green-100">
						Start Questionnaire →
					</NavLink>
				</div>
			</div>
		</>
	);
};
