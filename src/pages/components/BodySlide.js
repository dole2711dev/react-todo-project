import React from "react";

import SlideImage from "./SlideImage";

// Import other library
import Flickity from "react-flickity-component";

// Import Css
import "../pages.css";
import "../Flickity.css";

const BodySlide = () => {
	const flickityOptions = {
		initialIndex: 0,
		cellSelector: ".slide-image",
		accessibility: true,
		pageDots: true,
		wrapAround: true,
		autoPlay: 5000,
	};
	let styleTitle = {
		margin: "2rem",
	};

	return (
		<>
			<Flickity
				className={"carousel"}
				elementType={"div"}
				options={flickityOptions}
				disableImagesLoaded={false}>
				<div className="slide-image">
					<SlideImage id="1" />
				</div>
				<div className="slide-image">
					<SlideImage id="2" />
				</div>
				<div className="slide-image">
					<SlideImage id="3" />
				</div>
			</Flickity>
			<h1 style={styleTitle}>
				WEB DESIGN, MOBILE APP DEVELOPMENT AND MAINTENANCE
			</h1>
			<p>
				3FORCOM is an international IT partner. We can start from
				analyzing your actual business requirements for a web solution
				or a multi-platforms solution, continue with a great web design,
				web development, third-party integration and mobile development.
				Since 2008, we have provided effective design and development
				solutions for our corporate and startup clients.
			</p>
		</>
	);
};

export default BodySlide;
