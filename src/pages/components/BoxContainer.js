import React from "react";
import Button from "./Button";

const BoxContainer = (props) => {
	let { category, title, img, content, direction } = props.data;
	let directionComponent = direction === "left";

	return (
		<>
			<div
				className={`box-container ${directionComponent ? "left" : ""}`}>
				<div
					className={`box-container-part-content ${
						directionComponent ? "left" : ""
					}`}>
					<span className="box-container-category">{category}</span>
					<h1 className="box-container-title">{title}</h1>
					<p className="box-container-content">{content}</p>

					<Button text="Visit web site" />
				</div>
				<img
					src={img}
					alt=""
					className={`box-container-img ${
						directionComponent ? "right" : ""
					}`}
				/>
			</div>
		</>
	);
};

export default BoxContainer;
