import { NavLink } from "react-router-dom";
import { Nav } from "./Nav";

export const Header = () => {
	return (
		<>
			<NavLink to="/welcome">
				<div className="text-3xl mb-3 text-slate-800">
					Virtual Medical Site
				</div>
			</NavLink>
			<Nav />
		</>
	);
};
