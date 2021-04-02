import React from "react";

const ListMenu = (props) => {
	let { nameParentClass, nameChildrenClass, datas } = props.dataListMenu;
	let {
		Solution,
		Services,
		About,
		Contact,
		nameMenuChildren,
		nameMenuItemChildren,
	} = props.dataChildrenMenu;
	let keyObject = Object.keys(props.dataChildrenMenu);
	console.log(keyObject.includes("Solution"));
	return (
		<>
			<ul className={nameParentClass}>
				{datas.map((data) => (
					<li className={nameChildrenClass}>{data}</li>
				))}
			</ul>
		</>
	);
};

export default ListMenu;
