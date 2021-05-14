import React, { useEffect } from "react";
import "./Sidebar.css";

const Sidebar = (props) => {
	const { clicked, setClicked } = props;

	useEffect(() => {
		window.scroll({ top: 0, left: 0, behavor: "smooth" });
	}, [clicked]);
	return (
		<div id="coaching-sidebar" className="page-wrapper chiller-theme toggled">
			<a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
				<i className="fas fa-bars"></i>
			</a>
			<nav id="coaching-sidebar-content" className="sidebar-wrapper">
				<div className="sidebar-content">
					<div className="sidebar-menu">
						<ul className="header-menu">
							<div>
								<button
									id="services-category"
									className={
										clicked === "services-category"
											? "btn btn-primary-outline text-left active-category"
											: "btn btn-primary-outline text-left"
									}
									onClick={(e) => {
										setClicked(e.target.id);
									}}
								>
									Services
								</button>
							</div>
							<li>
								<button
									id="consulting-category"
									className={
										clicked === "consulting-category"
											? "btn btn-primary-outline text-left active-category"
											: "btn btn-primary-outline text-left"
									}
									onClick={(e) => {
										setClicked(e.target.id);
									}}
								>
									Consulting
								</button>
							</li>
							<li>
								<button
									id="speech-category"
									className={
										clicked === "speech-category"
											? "btn btn-primary-outline text-left active-category"
											: "btn btn-primary-outline text-left"
									}
									onClick={(e) => {
										setClicked(e.target.id);
									}}
								>
									Speech
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Sidebar;
