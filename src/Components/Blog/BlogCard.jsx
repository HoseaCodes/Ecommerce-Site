import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import styled from "styled-components";
import DOMPurify from "dompurify";
import image from "../../Images/Carousel2.png";

class BlogCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	render() {
		const { name, title, info, category, link, _id, img, subHeading } =
			this.props.blog;
		// const Wrapper = styled.div`
		// 	display: flex;
		// 	flex-direction: row;
		// `;
		// const Wrapper2 = styled.div`
		// 	padding: 4%;
		// `;
		// const StyledHR = styled.hr`
		// 	padding: 4%;
		// `;

		return (
			<div className="blog-card">
				<div className="blog-content container">
					<div className="row blog-info">
						<div className="col img-container">
							<img
								className="blog-img"
								width="450rem"
								src={img || image}
								alt="img"
							/>
						</div>
						<div className="col">
							<div className="blog-category">
								<p>{category}</p>
							</div>

							<div>
								<Link
									className="blog-title"
									to={`/specificBlog/${_id}`}
									style={{ textDecoration: "none", color: "grey" }}
								>
									{title}
								</Link>
							</div>
							<div>
								<Link to={link} className="blog-card-share">
									<p>Share</p>
								</Link>
							</div>
							<div>
								<p>{subHeading}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BlogCard;
