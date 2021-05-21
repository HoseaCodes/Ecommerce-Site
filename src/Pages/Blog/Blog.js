import React, { Component } from "react";

import Blog from "../../Components/Blog/Blog";
import MainCarousel from "../../Components/Carousel/Carousel";
import NavBar from "../../Components/NavBar/NavBar";
import "../../App.css";

class BlogPage extends Component {
	state = { open: true };

	render() {
		return (
			<div className="app" id="blog-page">
				<NavBar />
				<h3
					style={{ marginTop: "145px", marginBottom: "20px", padding: "0" }}
					className="category-title"
				>
					CATEGORY: &nbsp;BLOG
				</h3>
				<Blog />
			</div>
		);
	}
}

export default BlogPage;
