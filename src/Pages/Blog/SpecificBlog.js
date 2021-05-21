import React, { Component, useEffect, useState } from "react";
import SpecificBlog from "../../Components/Blog/SpecificBlog";
import NavBar from "../../Components/NavBar/NavBar";
import "../../App.css";
import { useParams } from "react-router";
import axios from "axios";
//------------------------------------------------

//------------------------------------------------

export default function SpecificBlogPage() {
	const [open, setOpen] = useState(true);
	const [blogData, setBlogData] = useState();
	const [editBlog, setEditBlog] = useState(false);
	const [isLoading, setLoading] = useState(true);
	const [isBlogLoaded, setIsBlogLoaded] = useState(false);
	const params = useParams();

	const deleteBlog = () => {
		setLoading(true);
		const confirm = window.confirm("Delete this blog?");
		if (confirm) {
			setLoading(true);
			axios
				.delete("/api/deleteBlog", { params: params.id })
				.then((response) => {
					setLoading(false);
				})
				.catch((err) => {
					setLoading(false);
					return console.log(err);
				});
		}
	};
	useEffect(() => {
		if (!isBlogLoaded) {
			axios
				.get("/api/getBlog", { params: params.id })
				.then((response) => {
					setLoading(false);
					setIsBlogLoaded(true);
					setBlogData({ ...response.data.blogData });
				})
				.catch((err) => {
					setLoading(false);
					return console.log(err);
				});
		}
	}, [isBlogLoaded]);
	return (
		<div className="app" id="specific-blog-page">
			<NavBar />
			{isLoading && <div>...Loading</div>}
			{!isLoading && (
				<>
					{blogData && (
						<>
							<SpecificBlog
								blog={blogData}
								editBlog={editBlog}
								setEditBlog={setEditBlog}
								setIsBlogLoaded={setIsBlogLoaded}
							/>

							{editBlog ? (
								<button
									className="btn btn-danger"
									onClick={() => {
										setEditBlog(false);
									}}
								>
									Cancel
								</button>
							) : (
								<>
									<button
										className="btn btn-primary"
										onClick={() => {
											setEditBlog(true);
										}}
									>
										Edit
									</button>
									<button
										className="btn btn-danger"
										onClick={() => {
											deleteBlog();
										}}
									>
										Delete
									</button>
								</>
							)}
						</>
					)}
					{!blogData && <div>No Such Blog Found</div>}
				</>
			)}
		</div>
	);
}
