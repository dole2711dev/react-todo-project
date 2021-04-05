import React, { useState } from "react";
import "./pages.css";
import ListMenu from "./components/ListMenu";
import { v4 as uuid } from "uuid";

// Import Icons
import { FaBattleNet, FaLessThanEqual } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
//FaDAndDk

const Navbar = () => {
	const [navbarFixed, setNavbarFixed] = useState(false);
	const [dataListMenu, setDataListMenu] = useState([
		{
			id: uuid(),
			nameMenu: "Home",
			activated: true,
		},
		{
			id: uuid(),
			nameMenu: "Solution",
			activated: false,
		},
		{
			id: uuid(),
			nameMenu: "Services",
			activated: false,
		},
		{
			id: uuid(),
			nameMenu: "Work",
			activated: false,
		},
		{
			id: uuid(),
			nameMenu: "About",
			activated: false,
		},
		{
			id: uuid(),
			nameMenu: "Contact",
			activated: false,
		},
	]);

	const dataChildrenMenu = {
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

	const handlerActivatedNavbar = (id) => {
		setDataListMenu((dataListMenu) => ({
			...dataListMenu,
		}));
	};

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
							handlerActivatedNavbar={handlerActivatedNavbar}
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
