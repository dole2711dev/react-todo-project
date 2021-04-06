import React from "react";
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
