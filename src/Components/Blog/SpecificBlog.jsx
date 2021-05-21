import React, { useState, useEffect } from "react";
// import { convertToHTML } from "draft-convert";
// import { convertFromRaw } from "draft-js";
import DOMPurify from "dompurify";
import image from "../../Images/Carousel2.png";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/plugins.pkgd.min.css";
import "./Blog.css";

import EditBlog from "../Admin/EditBlog/EditBlog.js";

const SpecificBlog = (props) => {
	const { name, title, info, img, category, link, _id } = props.blog;
	const { editBlog } = props;

	const createMarkup = (html) => {
		return {
			__html: DOMPurify.sanitize(html),
		};
	};
	return (
		<>
			{editBlog ? (
				<EditBlog
					blog={props.blog}
					editBlog={props.editBlog}
					setEditBlog={props.setEditBlog}
					setIsBlogLoaded={props.setIsBlogLoaded}
				/>
			) : (
				<div className="blog-container" style={{ marginTop: "165px" }}>
					<div id="blogs">
						<div className="blog-box">
							<div className="blog-card">
								<div className="blog-content container">
									<div className="row blog-info">
										<div className="row blog blog-category">
											<div className="col">
												<div>{category}</div>
											</div>
										</div>
										<div className="row blog blog-title">
											<div className="col">
												<div>{title}</div>
											</div>
										</div>
										<div className="row blog blog-name">
											<div className="col">
												<div>by {name}</div>
											</div>
										</div>
										<div className="row blog blog-share">
											<div className="col">
												<div>Share</div>
											</div>
										</div>
										<div className="row blog">
											<div className="img-container">
												<img
													className="blog-img"
													src={img || image}
													alt="img"
												/>
											</div>
										</div>
										{/* <h1>{title}</h1>
			<img className="blog-img" width="450rem" src={img} alt={name}></img> */}
										{/* <p style={{ whiteSpace: "pre-wrap" }}>{info}</p> */}
										<div className="row">
											<div className="col fr-view">
												<div
													dangerouslySetInnerHTML={createMarkup(
														JSON.parse(info)
													)}
												></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default SpecificBlog;
