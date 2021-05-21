import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
//Froala Editor
// // Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/plugins/image_manager.min.js";
import "froala-editor/js/plugins/image.min.js";
// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/plugins.pkgd.min.css";
// // // Require Font Awesome.
import "font-awesome/css/font-awesome.css";
import FroalaEditor from "react-froala-wysiwyg";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

//

import config from "../AddBlog/config.js";

import axios from "axios";
import "./EditBlog.css";

const EditBlog = (props) => {
	const { setEditBlog, setIsBlogLoaded } = props;
	const history = useHistory();
	const [isError, setShowError] = useState(false);
	const [errorName, setErrorName] = useState("");

	/* loading state for disabling submit when loading */
	const [isLoading, setLoading] = useState(false);
	//
	const [name, setName] = useState(props.blog.name);
	const [date, setDate] = useState(props.blog.date);
	const [img, setImg] = useState(props.blog.img);
	const [inputUrl, setInputUrl] = useState(props.blog.img);
	const [isImgChanged, setIsImgChanged] = useState(false);
	const [imgName, setImgName] = useState();
	const [title, setTitle] = useState(props.blog.title);
	const [type, setType] = useState(props.blog.type);
	const [info, setInfo] = useState(props.blog.info);
	const [infoImg, setInfoImg] = useState();
	const [subHeading, setSubHeading] = useState(props.blog.subHeading);
	const [tags, setTags] = useState(props.blog.tags);
	const [link, setLink] = useState(props.blog.link);
	const [model, setModel] = useState(JSON.parse(props.blog.info));

	const editorRef = useRef(null);
	/* HANDLING THE CATEGORY */
	/* getting the created Categories */
	const [category, setCategory] = useState(props.blog.category);
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

	function handleImg(event) {
		setShowError(false);
		if (event.target.files.length > 2) {
			setShowError(true);
			setErrorName("Only 1 image is allowed");
			return;
		} else if (event.target.files.length === 1) {
			setImgName(event.target.files[0].name);
			setImg(event.target.files[0]);
			setInputUrl(URL.createObjectURL(event.target.files[0]));
		} else {
			setImgName(null);
			setImg(null);
		}
	}

	async function handleSubmit(event) {
		event.preventDefault();
		/* returning if form is loading */
		if (isLoading) {
			return;
		}
		setShowError(false);

		const blog = {
			category: category,
			date: date,
			name: name,
			img: img,
			title: title,
			type: type,
			info: info,
			subHeading: subHeading,
			tags: tags,
			link: link,
			infoImg: infoImg,
		};

		if (
			!category ||
			!date ||
			!name ||
			!img ||
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

		try {
			/* in order to upload the image it must be converted to form data */
			if (props.blog.img.toString() !== inputUrl.toString()) {
				const formData = new FormData();
				formData.append("image", img);
				/* uploading image first then getting the url to be saved on the db */
				const imageUrlReq = await axios.post("/api/upload", formData);
				if (!imageUrlReq) {
					setShowError(true);
					return setErrorName(
						"An error occured uploading the image, try again"
					);
				}
				blog.img = imageUrlReq.data.path;
			}

			if (infoImg) {
				const editor = editorRef.current.editor;
				const infoFormData = new FormData();
				infoFormData.append("image", infoImg);
				await axios
					.post("/api/uploadFroalaImage", infoFormData)
					.then((res) => {
						let el = document.createElement("div");
						el.innerHTML = editor.html.get();
						let images = el.getElementsByTagName("img");
						let imageEl = images[0];
						imageEl.src = res.data.path;
						blog.info = JSON.stringify(el.innerHTML);
					})
					.catch((err) => {
						console.log(err);
					});
			}
			const apiResponse = await axios.put("/api/updateBlog", {
				blog: { ...blog, id: props.blog._id },
			});

			setIsBlogLoaded(false);
			setEditBlog(false);
			return setLoading(false);
		} catch (err) {
			setLoading(false);
			setShowError(true);
			setErrorName(err.msg);
			console.log(err);
		}
	}

	/* seperating the tags by commas */
	const [unEditedTags, setUnEditedTags] = useState(props.blog.tags);
	function handleTag(e) {
		setUnEditedTags(e.target.value);
		const editedTags = e.target.value.split(", ").filter(function (e) {
			return e.trim().length > 0;
		});
		setTags(editedTags);
	}

	return (
		<div
			id="edit-blog"
			style={{ marginTop: "10%", textAlign: "center", width: "100%" }}
			className="container"
		>
			<h3 style={{ margin: "1% 0" }}>Edit Blog</h3>
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col" style={{ marginRight: "auto" }}>
						<label htmlFor="category" className="control-label">
							Category
						</label>
						<select
							defaultValue={category}
							required
							onChange={(e) => {
								setCategory(e.target.value);
							}}
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
					<div className="col-4">
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
						<label htmlFor="sub-heading" className="control-label">
							Sub-heading
						</label>
						<input
							id="sub-heading"
							required
							className="form-control"
							onChange={(e) => {
								setSubHeading(e.target.value);
							}}
							value={subHeading}
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

				<label htmlFor="mainImg" className="control-label">
					Main Image
				</label>
				<div>
					<img style={{ width: "50%" }} src={inputUrl}></img>
					<input
						type="file"
						class="form-control-file"
						id="mainImgInput"
						onChange={(e) => {
							handleImg(e);
						}}
					/>
				</div>

				<label className="control-label" style={{ marginBottom: "2%" }}>
					Info
				</label>
				<br />
				<FroalaEditor
					ref={editorRef}
					id="info"
					tag="textarea"
					config={config({ setInfoImg })}
					model={model}
					onModelChange={(e) => {
						setModel(e);
						setInfo(JSON.stringify(e));
					}}
				/>
				<button type="submit" className="btn btn-primary" disabled={isLoading}>
					Update
				</button>
			</form>
			<div
				style={{
					textAlign: "start",
					width: "90%",
					margin: "auto",
					padding: "20px",
				}}
			>
				<FroalaEditorView model={model} />
			</div>
		</div>
	);
};

export default EditBlog;
