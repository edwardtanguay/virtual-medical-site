export const PageAbout = () => {
	return (
		<div className="space-y-6">
			<section>
				<h2 className="text-xl mb-2">About This Site</h2>
				<p className="mb-2">
					This is a full-stack application that demonstrates a frontend questionaire whose structure and interactivity is determined by a schema-driven flow fetched as JSON from the backend.
				</p>
			</section>

			<section>
				<h3 className="text-lg mb-2 font-semibold">🛠️ Technical Stack</h3>
				<ul className="list-disc ml-6">
					<li>Frontend: React with TypeScript</li>
					<li>Styling: Tailwind CSS</li>
					<li>State Management: Easy-Peasy (Redux)</li>
					<li>Backend: Node.js with Express</li>
					<li>Database: LowDB (JSON-based)</li>
				</ul>
			</section>
		</div>
	);
};
