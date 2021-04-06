import React from "react";
import BodySlide from "./components/BodySlide";
import "./pages.css";
import ButtonToTop from "./components/ButtonToTop";
import ListBoxContainer from "./components/ListBoxContainer";

const Body = () => {
	return (
		<>
			<div className="body-container">
				<BodySlide />
				<ListBoxContainer />
				<ButtonToTop />
			</div>
		</>
	);
};

export default Body;
