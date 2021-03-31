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
