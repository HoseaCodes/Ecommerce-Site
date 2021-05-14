import React, { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Services from "../../Components/Coaching/Services/Services";
import Sidebar from "../../Components/Coaching/Sidebar/Sidebar";
import "./Coaching.css";

const Coaching = (props) => {
	const [clicked, setClicked] = useState("consulting-category");

	return (
		<div id="coaching-page">
			<NavBar />
			<div className="coaching-container">
				<Sidebar clicked={clicked} setClicked={setClicked} />
				<Services clicked={clicked} setClicked={setClicked} />
			</div>
		</div>
	);
};

export default Coaching;
