import React from "react";
import "./pages.css";

// Import Icons
import { FaBattleNet } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
	return (
		<>
			<div className="navbar">
				<div className="navbar-container">
					<div className="navbar-header">
						<FaBattleNet className="navbar-header-logo" />
						<span className="navbar-header-title">Battle Net</span>
						<ul className="navbar-header-menu">
							<li className="navbar-header-menu-item">Home</li>
							<li className="navbar-header-menu-item">
								Solution
							</li>
							<li className="navbar-header-menu-item">
								Services
							</li>
							<li className="navbar-header-menu-item">Works</li>
							<li className="navbar-header-menu-item">About</li>
							<li className="navbar-header-menu-item">Contact</li>
						</ul>
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
