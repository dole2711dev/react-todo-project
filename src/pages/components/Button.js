import React, { useState } from "react";
import "./components.css";

const Button = (props) => {
	const { text, type } = props;
	const STYLE_BUTTON = ["btn-primary", "btn-active", "btn-special"];

	return (
		<button
			className={STYLE_BUTTON.includes(type) ? type : STYLE_BUTTON[0]}>
			{text}
		</button>
	);
};

export default Button;
