import React from "react";
import "../pages.css";
import { v4 as uuid } from "uuid";

const ListMenu = (props) => {
	let { dataListMenu } = props;
	let keyObject = Object.keys(props.dataChildrenMenu);

	let nameParentClass = "navbar-header-menu";
	let nameChildrenClass = "navbar-header-menu-item";
	let nameMenuChildren = "navbar-menu-child";
	let nameMenuItemChildren = "navbar-menu-child-item";

	console.log(dataListMenu);

	const handlerActivatedNavbar = (e) => {};

	const CreateLiMenu = (id, data, nameClass, isActivated) => {
		return (
			<li
				key={id}
				className={`${nameClass} ${isActivated ? "is-activated" : ""}`}
				onMouseMove={() => handlerActivatedNavbar()}>
				{data}
			</li>
		);
	};

	const CreateUlChildrenMenu = (datas, isActivated) => {
		const dataChildren = props.dataChildrenMenu[datas.nameMenu];
		return (
			<li
				key={datas.id}
				className={`${nameChildrenClass} ${
					isActivated ? "is-activated" : ""
				}`}>
				{datas.nameMenu}
				<ul className={nameMenuChildren}>
					{dataChildren.map((data) =>
						CreateLiMenu(uuid(), data, nameMenuItemChildren, false)
					)}
				</ul>
			</li>
		);
	};

	console.log(dataListMenu);
	return (
		<>
			<nav>
				<ul className={nameParentClass}>
					{dataListMenu.map((data) =>
						keyObject.includes(data.nameMenu)
							? CreateUlChildrenMenu(data)
							: CreateLiMenu(
									data.id,
									data.nameMenu,
									nameChildrenClass,
									data.activated
							  )
					)}
				</ul>
			</nav>
		</>
	);
};

export default ListMenu;
