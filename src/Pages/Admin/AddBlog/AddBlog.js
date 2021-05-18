import React, { useEffect, useState } from 'react';

import axios from 'axios';

import NavBar from '../../../Components/NavBar/NavBar';
import './AddBlog.css';
import CreateCategory from "./CreateCategory";
import BlogForm from "./BlogForm";


const AddBlog = () => {
	/* controlling inputs */
	const [category, setCategory] = useState();
	const [name, setName] = useState();
	const [date, setDate] = useState();
	const [img, setImg] = useState();
	const [imgName, setImgName] = useState();
	const [title, setTitle] = useState();
	const [type, setType] = useState();
	const [info, setInfo] = useState();
	const [subHeading, setSubHeading] = useState();
	const [tags, setTags] = useState();
	const [link, setLink] = useState();
	const [editBlog, setEditBlog] = useState(false);
	const [showCreateCategory, setShowCreateCategory] = useState(false);

	/* for showing errors */
	const [isError, setShowError] = useState(false);
	const [errorName, setErrorName] = useState("");

	/* loading state for disabling submit when loading */
	const [isLoading, setLoading] = useState(false);

	const states = {
		category,
		setCategory,
		name,
		setName,
		date,
		setDate,
		img,
		setImg,
		imgName,
		setImgName,
		title,
		setTitle,
		type,
		setType,
		info,
		setInfo,
		subHeading,
		setSubHeading,
		tags,
		setTags,
		link,
		setLink,
		editBlog,
		setEditBlog,
		setShowError,
		setErrorName,
		setLoading,
	};

	/* for handling the image upload */
	function handleImg(event) {
		setShowError(false);
		if (event.target.files.length > 2) {
			setShowError(true);
			setErrorName("Only 1 image is allowed");
			return;
		}
		setImgName(event.target.files[0].name);
		setImg(event.target.files[0]);
	}

	// /* for handling the subheading */
	const [unEditedSubheading, setUnEditedSubheading] = useState();
	/* seperating the subheading by commas */
	function handleSubheading(e) {
		setUnEditedSubheading(e.target.value);

		const editedSubheading = e.target.value.split(", ").filter(function (e) {
			return e.trim().length > 0;
		});
		setSubHeading(editedSubheading);
	}
	/* for handling the tags */
	const [unEditedTags, setUnEditedTags] = useState();
	/* seperating the tags by commas */
	function handleTag(e) {
		setUnEditedTags(e.target.value);
		const editedTags = e.target.value.split(", ").filter(function (e) {
			return e.trim().length > 0;
		});
		setTags(editedTags);
	}

	/* HANDLING THE CATEGORY */
	/* getting the created Categories */
	const [createdCategories, setCreatedCategories] = useState();
	/* this state is used for updating the categories when a user creates a new category  */
	const [newCategory, setNewCategory] = useState();
	useEffect(
		() => {
			axios
				.get("/api/category")
				.then((foundCategories) => {
					console.log(foundCategories.data);
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
	function handleCategory(event) {
		setCategory(event.target.value);
	}
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

	/* for handling the submit */
	async function handleNext(event) {
		event.preventDefault();
		/* returning if form is loading */
		if (isLoading) {
			return;
		}
		setShowError(false);
		if (
			!name ||
			!category ||
			!date ||
			// !img ||
			!title ||
			!type ||
			!info ||
			!subHeading ||
			!tags ||
			!link
		) {
			setShowError(true);
			return setErrorName("Missing input, try again.");
		}
		setLoading(true);
		setEditBlog(true);
	}

	useEffect(() => {
		if (errorName) {
			console.log(errorName);
		}
	}, [errorName]);

	return (
		<div
			id="add-blog"
			style={{ marginTop: "15%", textAlign: "center", width: "100%" }}
		>
			<NavBar />
			<div className="container">
				{!editBlog ? (
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
									{/* <h3>Create a Blog</h3> */}
									{/* <form onSubmit={handleNext}>
										<div className="row">
											<div className="col" style={{ marginRight: "auto" }}>
												<label htmlFor="category" className="control-label">
													Category
												</label>
												<select
													defaultValue=""
													required
													onChange={handleCategory}
													value={category}
													className="form-select"
													id="category"
												>
													<option value="" disabled>
														select or create a category
													</option>
													{createdCategories &&
														createdCategories.map((categoryData) => {
															return (
																<option value={categoryData.name}>
																	{categoryData.name}
																</option>
															);
														})}
												</select>
											</div>
											<div className="col-3">
												<div className="form-group">
													<label htmlFor="date" className="control-label">
														Date
													</label>
													<input
														id="date"
														required
														onChange={(e) => {
															setDate(e.target.value);
														}}
														value={date}
														placeholder="Date"
														type="date"
														className="form-control"
													/>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-md-4">
												<div className="form-group">
													<label htmlFor="name" className="control-label">
														Name
													</label>
													<input
														type="text"
														required
														className="form-control"
														id="name"
														onChange={(e) => {
															setName(e.target.value);
														}}
														value={name}
													/>
												</div>
											</div>
											<div className="col-md-4">
												<div className="form-group">
													<label htmlFor="title" className="control-label">
														Title
													</label>
													<input
														type="text"
														required
														className="form-control"
														id="title"
														onChange={(e) => {
															setTitle(e.target.value);
														}}
														value={title}
													/>
												</div>
											</div>
											<div className="col-md-4">
												<div className="form-group">
													<label htmlFor="type" className="control-label">
														Type
													</label>
													<input
														type="text"
														required
														className="form-control"
														id="type"
														onChange={(e) => {
															setType(e.target.value);
														}}
														value={type}
													/>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<label htmlFor="info" className="control-label">
													Info
												</label>
												<textarea
													id="info"
													required
													className="form-control"
													onChange={(e) => {
														setInfo(e.target.value);
													}}
													value={info}
												></textarea>
											</div>
										</div>

										<div className="row">
											<div className="col">
												<label htmlFor="sub-heading" className="control-label">
													Sub-heading
												</label>
												<input
													id="sub-heading"
													required
													className="form-control"
													onChange={(e) => {
														handleSubheading(e);
													}}
													value={unEditedSubheading}
												/>
											</div>
											<div className="col">
												<label htmlFor="link" className="control-label">
													Link
												</label>
												<input
													id="link"
													required
													onChange={(e) => {
														setLink(e.target.value);
													}}
													value={link}
													className="form-control"
												/>
											</div>
										</div>
										<label htmlFor="tags" className="control-label">
											Tags
										</label>
										<input
											id="tags"
											required
											onChange={(e) => {
												handleTag(e);
											}}
											value={unEditedTags}
											className="form-control"
										/>
										<button className="btn btn-primary" disabled={isLoading}>
											Next
										</button>
									</form> */}
									<BlogForm
										{...states}
										setEditBlog={setEditBlog}
										handleCategory={handleCategory}
										createdCategories={createdCategories}
										setDate={setDate}
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
				) : (
					<BlogForm {...states} setEditBlog={setEditBlog} />
				)}
			</div>
		</div>
	);
};
export default AddBlog;
