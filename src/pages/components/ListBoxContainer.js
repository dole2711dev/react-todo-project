import React from "react";
import { render } from "react-dom";
import BoxContainer from "./BoxContainer";
import Image from "../../image/empty-image.jpg";

const ListBoxContainer = () => {
	const dataBoxContainer = [
		{
			category: "DESKTOP & MOBILE WEBSITE | CMS",
			title: "Daikin Air Conditioning",
			img: Image,
			content:
				"This is our partner client for years, and we are so proud to work with Daikin team on different project types, including website and application development, system maintenance, SEO, marketing microsite development and other data-driven solutions.",
			direction: "left",
		},
		{
			category: "DESKTOP & MOBILE WEBSITE | CMS",
			title: "Daikin Air Conditioning",
			img: Image,
			content:
				"This is our partner client for years, and we are so proud to work with Daikin team on different project types, including website and application development, system maintenance, SEO, marketing microsite development and other data-driven solutions.",
			direction: "right",
		},
		{
			category: "DESKTOP & MOBILE WEBSITE | CMS",
			title: "Daikin Air Conditioning",
			img: Image,
			content:
				"This is our partner client for years, and we are so proud to work with Daikin team on different project types, including website and application development, system maintenance, SEO, marketing microsite development and other data-driven solutions.",
			direction: "left",
		},
		{
			category: "DESKTOP & MOBILE WEBSITE | CMS",
			title: "Daikin Air Conditioning",
			img: Image,
			content:
				"This is our partner client for years, and we are so proud to work with Daikin team on different project types, including website and application development, system maintenance, SEO, marketing microsite development and other data-driven solutions.",
			direction: "right",
		},
	];
	let heightBox = [];
	let boxContainerList = document.getElementsByClassName("box-container");
	document.addEventListener("DOMContentLoaded", function () {
		for (let index = 0; index < boxContainerList.length; index++) {
			let scrollTop =
				boxContainerList[index].offsetTop -
				boxContainerList[index].scrollTop +
				boxContainerList[index].clientTop;
			heightBox.push(scrollTop + (scrollTop / 100) * 15);
		}
	});

	console.log(heightBox);

	let showIndex = 0;
	document.addEventListener("scroll", function () {
		var positionCurrent = window.screen.height + window.scrollY;

		if (positionCurrent >= heightBox[showIndex]) {
			boxContainerList[showIndex].classList.add("show");
			showIndex++;
		}
	});

	return (
		<>
			<div className="list-box-container">
				{dataBoxContainer.map((boxContainer) => (
					<BoxContainer data={boxContainer} />
				))}
			</div>
		</>
	);
};

export default ListBoxContainer;
