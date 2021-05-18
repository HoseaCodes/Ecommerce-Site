import React, { useState, useEffect } from "react";
import { convertToHTML } from "draft-convert";
import { convertFromRaw } from "draft-js";
import DOMPurify from "dompurify";
import "./Blog.css";

const SpecificBlog = (props) => {
	const { name, title, info, img, category, link, _id } = props.blog;

	const parsedProperty = (property) => {
		return convertToHTML(convertFromRaw(JSON.parse(property)));
	};

	const createMarkup = (html) => {
		return {
			__html: DOMPurify.sanitize(html),
		};
	};
	console.log(name);
	console.log(parsedProperty(name));

	return (
		<div style={{ marginTop: "15%" }}>
			<div className="row">
				<div className="col-1">Blog Name</div>
				<div className="col">
					<div
						dangerouslySetInnerHTML={createMarkup(parsedProperty(name))}
					></div>
				</div>
			</div>
			<div className="row">
				<div className="col-1">Blog Title</div>
				<div className="col">
					<div
						dangerouslySetInnerHTML={createMarkup(parsedProperty(title))}
					></div>
				</div>
			</div>
			{/* <h1>{title}</h1>
			<img className="blog-img" width="450rem" src={img} alt={name}></img> */}
			{/* <p style={{ whiteSpace: "pre-wrap" }}>{info}</p> */}
			<div className="row">
				<div className="col-1">Blog Info</div>
				<div className="col">
					<div
						dangerouslySetInnerHTML={createMarkup(parsedProperty(info))}
					></div>
				</div>
			</div>
		</div>
	);
};

export default SpecificBlog;
