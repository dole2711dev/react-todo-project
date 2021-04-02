import React, { useState } from "react";
import "./pages.css";
import ListMenu from "./components/ListMenu";

// Import Icons
import { FaBattleNet } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
//FaDAndDk
const Navbar = () => {
	const [navbarFixed, setNavbarFixed] = useState(false);
	const dataListMenu = {
		nameParentClass: "navbar-header-menu",
		nameChildrenClass: "navbar-header-menu-item",
		datas: ["Home", "Solution", "Services", "Work", "About", "Contact"],
	};
	const dataChildrenMenu = {
		nameMenuChildren: "footer-menu-child",
		nameMenuItemChildren: "footer-menu-child-item",
		Solution: [
			"Mobile Application",
			"Website & Microsite",
			"E-Commerce",
			"Dedicated Development Team",
			"Business Application",
			"System Maintenance",
		],
		Services: [
			"Cross-platform App Development",
			"IOS & Android Development",
			"Web Development",
			"Agile Development",
			"Technical Consulting",
			"UX & UI Design",
			"Search Engine Optimizing",
		],
		About: ["Our Clientele", "FAQs"],
		Contact: ["General Contact", "Submit Your RFP", "Request for a Team"],
	};
	document.addEventListener("scroll", () => {
		if (
			document.body.scrollTop >= 80 ||
			document.documentElement.scrollTop >= 80
		) {
			setNavbarFixed(true);
		} else {
			setNavbarFixed(false);
		}
	});
	return (
		<>
			<div className={`navbar ${navbarFixed ? "navbar-fixed" : ""}`}>
				<div className="navbar-container">
					<div className="navbar-header">
						<FaBattleNet className="navbar-header-logo" />
						<span className="navbar-header-title">Battle Net</span>
						<ListMenu
							dataListMenu={dataListMenu}
							dataChildrenMenu={dataChildrenMenu}
						/>
						<div className="navbar-login">
							<a href="#">
								Login
								<FaUser className="icon-menu-small ml-10" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
