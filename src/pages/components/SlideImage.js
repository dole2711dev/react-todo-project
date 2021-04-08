import React from "react";

// Import images
import SlideImage1 from "../../image/slide1.jpg";
import SlideImage2 from "../../image/slide2.jpg";
import SlideImage3 from "../../image/slide3.jpg";

const SlideImage = (props) => {
	const dataSlide = [
		{
			id: 1,
			src: SlideImage1,
			title: "Make your web development project a success",
			content:
				"Simplify your user's learning curve and make the user experience practical, and streamline the experience to different platforms and devices to maximise the application value.",
			textButton: "Mobile Application Development",
		},
		{
			id: 2,
			src: SlideImage2,
			title: "Develop mobile app, and launch it in less than 5 weeks",
			content:
				"With the flexibility of agile development model, and our technical experience, your mobile app can be launched very quickly, avoiding pitfalls.",
			textButton: "Website Design & Development",
		},
		{
			id: 3,
			src: SlideImage3,
			title:
				"Keep your users happy with fluid web design on desktop and mobile",
			content:
				"We always adopt new and effective methods to improve our productivity and collaboration with you. Working with us is simply better, faster and more cost-effective.",
			textButton: "Agile Development",
		},
	];
	let { id } = props;
	// eslint-disable-next-line eqeqeq
	let dataGrid = dataSlide.find((item) => item.id == id);
	let { src, title, content, textButton } = dataGrid;

	return (
		<>
			<div className="slide-container">
				<img className="slide-img" src={src} alt="Slide" />
				<h2 className="slide-title">{title}</h2>
				<p className="slide-content">{content}</p>
				<button className="slide-button">{textButton}</button>
			</div>
		</>
	);
};

export default SlideImage;
