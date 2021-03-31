import React from "react";
import Flickity from "react-flickity-component";
import "../pages.css";
import "../Flickity.css";

// Import images
import SlideImage1 from "../../image/Caribbean-beach.jpg";

const BodySlide = () => {
	const flickityOptions = {
		initialIndex: 0,
		cellSelector: ".slide-image",
		accessibility: true,
		pageDots: true,
		wrapAround: true,
		autoPlay: true,
	};
	return (
		<>
			<Flickity
				className={"carousel"}
				elementType={"div"}
				options={flickityOptions}
				disableImagesLoaded={false}>
				<div className="slide-image">
					<img src={SlideImage1} alt="Slide" />
				</div>
				<div className="slide-image">
					<img src={SlideImage1} alt="Slide" />
				</div>
				<div className="slide-image">
					<img src={SlideImage1} alt="Slide" />
				</div>
				<div className="slide-image">
					<img src={SlideImage1} alt="Slide" />
				</div>
				<div className="slide-image">
					<img src={SlideImage1} alt="Slide" />
				</div>
				<div className="slide-image">
					<img src={SlideImage1} alt="Slide" />
				</div>
			</Flickity>
		</>
	);
};

export default BodySlide;
