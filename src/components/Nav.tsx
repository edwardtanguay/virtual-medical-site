import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import * as tools from "../tools";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import React from "react";

const menuItems = [
	{
		idCode: "welcome",
		title: "Welcome",
	},
	{
		idCode: "about",
		title: "About",
	},
];

export const Nav = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	const location = useLocation();
	const pageIdCode = tools.chopLeft(location.pathname, "/");
	const currentMenuItem = pageIdCode.startsWith("questionnaire")
		? { idCode: "questionnaire", title: "Questionnaire" }
		: menuItems.find((m) => m.idCode === pageIdCode);

	const handleMenuToggle = () => {
		setShowMobileMenu(!showMobileMenu);
	};

	return (
		<nav className="bg-sky-700 rounded-lg shadow-md mb-4">
			<div className="px-4 py-3">
				<div className="flex justify-between items-center">
					<div className="hidden md:flex space-x-4">
						{menuItems.map((menuItem) => (
							<NavLink
								key={menuItem.idCode}
								to={`/${menuItem.idCode}`}
								className={({ isActive }) =>
									`text-white hover:text-sky-100 transition-colors ${
										isActive ? "font-semibold" : ""
									}`
								}
							>
								{menuItem.title}
							</NavLink>
						))}
					</div>
					<button
						onClick={handleMenuToggle}
						className="md:hidden text-white hover:text-sky-100"
					>
						<GiHamburgerMenu className="h-6 w-6" />
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			{showMobileMenu && (
				<div className="md:hidden px-4 pb-3">
					{menuItems.map((menuItem) => (
						<NavLink
							key={menuItem.idCode}
							to={`/${menuItem.idCode}`}
							className={({ isActive }) =>
								`block py-2 text-white hover:text-sky-100 transition-colors ${
									isActive ? "font-semibold" : ""
								}`
							}
						>
							{menuItem.title}
						</NavLink>
					))}
				</div>
			)}
		</nav>
	);
};
