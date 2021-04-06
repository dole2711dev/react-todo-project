import React from "react";
import { FaAngleUp } from "react-icons/fa";

const ButtonToTop = () => {
	window.onscroll = () => {
		let divCircle = document.querySelector(".inner-circle");
		if (
			document.body.scrollTop > 100 ||
			document.documentElement.scrollTop > 100
		) {
			divCircle.classList.add("show");
		} else {
			if (divCircle.classList.contains("show")) {
				divCircle.classList.remove("show");
			}
		}
	};

	const handlerToTop = (event) => {
		event.preventDefault();
		document.documentElement.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			<div className="inner-circle">
				<button className="button-to-top" onClick={handlerToTop}>
					<FaAngleUp className="icon-menu-larger" />
				</button>
			</div>
		</>
	);
};

export default ButtonToTop;
