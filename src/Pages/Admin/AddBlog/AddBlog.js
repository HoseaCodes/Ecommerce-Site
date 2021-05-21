import React, { useEffect, useState } from "react";

import axios from "axios";

import NavBar from "../../../Components/NavBar/NavBar";
import "./AddBlog.css";
import CreateCategory from "./CreateCategory";
import BlogForm from "../../../Components/Admin/AddBlog/BlogForm";

const AddBlog = () => {
	const [showCreateCategory, setShowCreateCategory] = useState(false);
	const [imgName, setImgName] = useState();
	/* for showing errors */
	const [isError, setShowError] = useState(false);
	const [errorName, setErrorName] = useState("");

	/* loading state for disabling submit when loading */
	const [isLoading, setLoading] = useState(false);

	/* for handling the image upload */

	/* HANDLING THE CATEGORY */
	/* getting the created Categories */
	const [category, setCategory] = useState();
	const [createdCategories, setCreatedCategories] = useState();
	/* this state is used for updating the categories when a user creates a new category  */
	const [newCategory, setNewCategory] = useState();
	useEffect(
		() => {
			axios
				.get("/api/category")
				.then((foundCategories) => {
					return setCreatedCategories(foundCategories.data);
				})
				.catch((err) => {
					setShowError(true);
					setErrorName("There was an error in searching for the categories");
					return console.log(err);
				});
		},
		/* getting the category data again when a user creates a new category*/ [
			newCategory,
		]
	);
	/* handling the category change */

	/* creating category */
	const [inputCategory, setInputCategory] = useState();
	function handleInputCategory(event) {
		setInputCategory(event.target.value);
	}
	/* submitting the category */
	const [categoryLoading, setCategoryLoading] = useState(false);
	function submitCategory(event) {
		event.preventDefault();
		if (categoryLoading || !inputCategory) {
			return;
		}
		setCategoryLoading(true);
		axios
			.post("/api/category", { name: inputCategory })
			.then(() => {
				setNewCategory(inputCategory);
				setCategory(inputCategory);
				setInputCategory("");
				return setCategoryLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setShowError(true);
				setCategoryLoading(false);
				return setErrorName(
					"an error occured creating the category, try again"
				);
			});
	}

	useEffect(() => {
		if (errorName) {
			console.log(errorName);
		}
	}, [errorName]);

	return (
		<div
			id="add-blog"
			style={{ marginTop: "10%", textAlign: "center", width: "100%" }}
		>
			<NavBar />
			<div className="container">
				<>
					{showCreateCategory && (
						<>
							<CreateCategory
								categoryLoading={categoryLoading}
								handleInputCategory={handleInputCategory}
								inputCategory={inputCategory}
								submitCategory={submitCategory}
								setShowCreateCategory={setShowCreateCategory}
							/>
						</>
					)}
					{!showCreateCategory && (
						<>
							<div>
								<p>Create category?</p>
								<button
									className="btn btn-primary"
									onClick={() => {
										setShowCreateCategory(true);
									}}
								>
									Create
								</button>
							</div>

							<div
								className="error-container"
								style={{ display: isError ? "flex" : "none" }}
							>
								<h3 style={{ color: "red" }}>{errorName}</h3>
							</div>
							<div>
								<BlogForm
									setShowError={setShowError}
									setErrorName={setErrorName}
								/>
								{/* <div>
									<label
										htmlFor="imgInput"
										style={{
											cursor: "pointer",
											padding: "10px",
											border: "solid 2px black",
										}}
									>
										Upload Image | Current Image:{" "}
										{imgName ? imgName : "No Image Selected"}
									</label>
									<input
										required
										style={{ display: "none" }}
										id="imgInput"
										onChange={(e) => {
											handleImg(e);
										}}
										placeholder="Upload Image"
										type="file"
										accept="image/*"
									/>
								</div> */}
							</div>
						</>
					)}
				</>
			</div>
		</div>
	);
};
export default AddBlog;
