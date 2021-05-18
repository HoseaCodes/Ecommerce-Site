import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import styled from "styled-components";
import edjsHTML from "editorjs-html";
import DOMPurify from "dompurify";
import { convertToHTML } from "draft-convert";
import { convertFromRaw } from "draft-js";

class BlogCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	render() {
		const { name, title, info, img, category, link, _id } = this.props.blog;
		const Wrapper = styled.div`
			display: flex;
			flex-direction: row;
		`;
		const Wrapper2 = styled.div`
			padding: 4%;
		`;
		const StyledHR = styled.hr`
			padding: 4%;
		`;
		const edjsParser = edjsHTML();
		const parsedProperty = (property) => {
			return convertToHTML(convertFromRaw(JSON.parse(property)));
		};
		const createMarkup = (html) => {
			return {
				__html: DOMPurify.sanitize(html),
			};
		};

		console.log(createMarkup(parsedProperty(name)));

		console.log(this.props.blog);
		return (
			<div className="blog-card">
				<Wrapper className="blog-content">
					<img className="blog-img" width="450rem" src={img} alt="img" />
					<Wrapper2>
						<p>{category}</p>
						{/* <div
						dangerouslySetInnerHTML={createMarkup(parsedProperty(category))}
						></div> */}
						<Link to={`/specificBlog/${_id}`}>
							Blog
							<div
								dangerouslySetInnerHTML={createMarkup(parsedProperty(name))}
							></div>
						</Link>
						<Link to={link} className="blog-card-share">
							<p>Share</p>
						</Link>
						<div
							dangerouslySetInnerHTML={createMarkup(parsedProperty(title))}
						></div>
					</Wrapper2>
				</Wrapper>
			</div>
		);
	}
}

export default BlogCard;
