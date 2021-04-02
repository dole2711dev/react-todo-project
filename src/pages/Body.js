import React from "react";
import BodySlide from "./components/BodySlide";
import "./pages.css";
import ButtonToTop from "./components/ButtonToTop";

const Body = () => {
	return (
		<>
			<div className="body-container">
				<BodySlide />
				<ButtonToTop />
			</div>
		</>
	);
};

export default Body;
