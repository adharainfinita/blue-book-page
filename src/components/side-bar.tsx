import React from "react";
import "../styles/SideBar.css";

const Sidebar: React.FC = () => {
	const expandSidebar = () => {
		const sidebar = document.querySelector(".sidebar") as HTMLElement;
		sidebar.classList.add("expanded");
	};

	const collapseSidebar = () => {
		const sidebar = document.querySelector(".sidebar") as HTMLElement;
		sidebar.classList.remove("expanded");
	};

	return (
		<aside
			className="sidebar"
			onMouseOver={expandSidebar}
			onMouseOut={collapseSidebar}
		>
			<div className="sidebar-content">
				<a
					href="https://www.wattpad.com/1328589875-el-libro-azul-la-maldici%C3%B3n-de-esker%27lamet-cap%C3%ADtulo"
					target="_blank"
				>
					Capítulo 1
				</a>
				<a
					href="https://www.wattpad.com/1288765845-el-libro-azul-la-maldici%C3%B3n-de-esker%27lamet-cap%C3%ADtulo"
					target="_blank"
				>
					Capítulo 2
				</a>
				<a
					href="https://www.wattpad.com/1294683051-el-libro-azul-la-maldici%C3%B3n-de-esker%27lamet-cap%C3%ADtulo"
					target="_blank"
				>
					Capítulo 3
				</a>
				<a
					href="https://www.wattpad.com/1309026663-el-libro-azul-la-maldici%C3%B3n-de-esker%27lamet-cap%C3%ADtulo"
					target="_blank"
				>
					Capítulo 4
				</a>
				<a
					href="https://www.wattpad.com/1310758912-el-libro-azul-la-maldici%C3%B3n-de-esker%27lamet-cap%C3%ADtulo"
					target="_blank"
				>
					Capítulo 5
				</a>
				<a
					href="https://www.wattpad.com/1311514051-el-libro-azul-la-maldici%C3%B3n-de-esker%27lamet-cap%C3%ADtulo"
					target="_blank"
				>
					Capítulo 6: parte 1
				</a>
				<a
					href="https://www.wattpad.com/1311516452-el-libro-azul-la-maldici%C3%B3n-de-esker%27lamet-cap%C3%ADtulo"
					target="_blank"
				>
					Capítulo 6: parte 2
				</a>
			</div>
		</aside>
	);
};

export default Sidebar;
