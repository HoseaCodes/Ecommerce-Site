import { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";

function ServicesAPI() {
	const [clickedCategory, setClickedCategory] = useState("");
	const [windowDimensions, setWindowDimensions] = useState([
		window.innerWidth,
		window.innerHeight,
	]);

	function useWindowSize() {
		const [size, setSize] = useState([0, 0]);
		useLayoutEffect(() => {
			function updateSize() {
				setSize([window.innerWidth, window.innerHeight]);
			}
			window.addEventListener("resize", updateSize);
			updateSize();
			return () => window.removeEventListener("resize", updateSize);
		}, []);
		return size;
	}

	const [width, height] = useWindowSize();

	useEffect(() => {
		setWindowDimensions([width, height]);
	}, [width, height]);

	return {
		clickedCategory: [clickedCategory, setClickedCategory],
		windowDimensions: [windowDimensions, setWindowDimensions],
	};
}

export default ServicesAPI;
