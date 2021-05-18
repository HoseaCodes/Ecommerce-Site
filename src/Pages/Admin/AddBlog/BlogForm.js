import React, { useState } from "react";

import {
	EditorState,
	ContentState,
	convertToRaw,
	convertFromRaw,
	convertFromHTML,
} from "draft-js";
import { convertToHTML } from "draft-convert";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { tool, infoTool } from "./DraftJSTools";

import DOMPurify from "dompurify";

import axios from "axios";
import "./BlogForm.css";

const StyleBlog = (props) => {
	const {
		name,
		date,
		title,
		type,
		info,
		subHeading,
		tags,
		link,
		category,
		isLoading,
		setLoading,
		setShowError,
		setErrorName,
		setEditBlog,
		handleCategory,
		createdCategories,
		setDate,
	} = props;

	const eState = (content) => {
		if (content) {
			return EditorState.createWithContent(
				ContentState.createFromBlockArray(convertFromHTML(`<p>${content}</p>`))
			);
		} else return EditorState.createEmpty();
	};
	const convertedProp = (prop) => {
		return JSON.stringify(convertToRaw(prop.getCurrentContent()));
	};
	const [editedBlog, setEditedBlog] = useState({
		// category: eState(category),
		// date: eState(date),
		name: eState(name),
		title: eState(title),
		info: eState(info),
		subHeading: eState(subHeading),
		type: eState(type),
		tags: eState(tags),
		link: eState(link),
	});
	const [convertedBlog, setConvertedBlog] = useState({
		category: category,
		// category: convertedProp(eState(category)),
		date: date,
		// date: convertedProp(eState(date)),
		name: convertedProp(eState(name)),
		title: convertedProp(eState(title)),
		info: convertedProp(eState(info)),
		subHeading: convertedProp(eState(subHeading)),
		type: convertedProp(eState(type)),
		tags: convertedProp(eState(tags)),
		link: convertedProp(eState(link)),
	});

	const createMarkup = (html) => {
		return {
			__html: DOMPurify.sanitize(html),
		};
	};
	const handleEditorChange = async ({
		content,

		property,
	}) => {
		setEditedBlog({
			...editedBlog,
			[property]: content,
		});
		setConvertedBlog({
			...convertedBlog,
			[property]: JSON.stringify(convertToRaw(content.getCurrentContent())),
		});
		// console.log(convertToRaw(content.getCurrentContent()));
		// console.log(convertFromRaw(convertToRaw(content.getCurrentContent())));
		// console.log(
		// 	convertToHTML(convertFromRaw(convertToRaw(content.getCurrentContent())))
		// );
	};

	async function handleSubmit(event) {
		event.preventDefault();
		/* returning if form is loading */
		if (isLoading) {
			return;
		}
		setShowError(false);

		if (
			!category ||
			!date ||
			!convertedBlog.name ||
			// !img ||
			!convertedBlog.title ||
			!convertedBlog.type ||
			!convertedBlog.info ||
			!convertedBlog.subHeading ||
			!convertedBlog.tags ||
			!convertedBlog.link
		) {
			setShowError(true);
			return setErrorName("Missing input, try again.");
		}
		setLoading(true);
		/* in order to upload the image it must be converted to form data */
		// const formData = new FormData();
		// formData.append("file", img);
		// /* uploading image first then getting the url to be saved on the db */
		// const imageUrlReq = await axios.post("/api/upload", formData);
		// if (!imageUrlReq) {
		// 	setShowError(true);
		// 	return setErrorName("An error occured uploading the image, try again");
		// }
		try {
			const data = {
				...convertedBlog,
				category: category,
				date: date,
			};
			const apiResponse = await axios.post("/api/postBlog", data);
			console.log(apiResponse);
			return setLoading(false);
		} catch (err) {
			setLoading(false);
			setShowError(true);

			setErrorName(err.msg);
			console.log(err);
		}
	}

	return (
		<div id="style-blog">
			<h3 style={{ margin: "2% 0" }}>Create a Blog</h3>
			<form onSubmit={handleSubmit}>
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
				{/* <div className="editor-container">
					<label>Category</label>
					<Editor
						readonly
						toolbarOnFocus
						editorState={editedBlog.category}
						onEditorStateChange={(content) => {
							handleEditorChange({
								content,

								property: "category",
							});
						}}
						toolbarClassName="category-toolbarClassName"
						wrapperClassName="wrapperClassName"
						editorClassName="category-editorClassName"
						placeholder={category}
						toolbar={tool}
					/>
				</div> */}
				{/* <div className="editor-container">
					<label>Date</label>
					<Editor
						toolbarOnFocus
						editorState={editedBlog.date}
						onEditorStateChange={(content) => {
							handleEditorChange({
								content,
								property: "date",
							});
						}}
						toolbarClassName="date-toolbarClassName"
						wrapperClassName="wrapperClassName"
						editorClassName="date-editorClassName"
						placeholder={date}
						toolbar={tool}
					/>
				</div> */}
				<div className="editor-container">
					<label>Name</label>
					<Editor
						toolbarOnFocus
						editorState={editedBlog.name}
						onEditorStateChange={(content) => {
							handleEditorChange({
								content,
								property: "name",
							});
						}}
						toolbarClassName="name-toolbarClassName"
						wrapperClassName="wrapperClassName"
						editorClassName="name-editorClassName"
						placeholder={name}
						toolbar={tool}
					/>
				</div>
				<div className="editor-container">
					<label>Title</label>
					<Editor
						toolbarOnFocus
						editorState={editedBlog.title}
						onEditorStateChange={(content) => {
							handleEditorChange({
								content,
								property: "title",
							});
						}}
						toolbarClassName="title-toolbarClassName"
						wrapperClassName="wrapperClassName"
						editorClassName="title-editorClassName"
						placeholder={title}
						toolbar={tool}
					/>
				</div>
				<div className="editor-container">
					<label>Info</label>
					<Editor
						toolbarOnFocus
						editorState={editedBlog.info}
						onEditorStateChange={(content) => {
							handleEditorChange({
								content,
								property: "info",
							});
						}}
						toolbarClassName="info-toolbarClassName"
						wrapperClassName="wrapperClassName"
						editorClassName="info-editorClassName"
						placeholder={info}
						toolbar={infoTool}
					/>
				</div>
				<div className="editor-container">
					<label>Sub-Heading</label>
					<Editor
						toolbarOnFocus
						editorState={editedBlog.subHeading}
						onEditorStateChange={(content) => {
							handleEditorChange({
								content,
								property: "subHeading",
							});
						}}
						toolbarClassName="subHeading-toolbarClassName"
						wrapperClassName="wrapperClassName"
						editorClassName="subHeading-editorClassName"
						placeholder={subHeading}
						toolbar={tool}
					/>
				</div>
				<div className="editor-container">
					<label>Type</label>
					<Editor
						toolbarOnFocus
						editorState={editedBlog.type}
						onEditorStateChange={(content) => {
							handleEditorChange({
								content,
								property: "type",
							});
						}}
						toolbarClassName="type-toolbarClassName"
						wrapperClassName="wrapperClassName"
						editorClassName="type-editorClassName"
						placeholder={type}
						toolbar={tool}
					/>
				</div>
				<div className="editor-container">
					<label>Link</label>
					<Editor
						toolbarOnFocus
						editorState={editedBlog.link}
						onEditorStateChange={(content) => {
							handleEditorChange({
								content,
								property: "link",
							});
						}}
						toolbarClassName="link-toolbarClassName"
						wrapperClassName="wrapperClassName"
						editorClassName="link-editorClassName"
						placeholder={link}
						toolbar={tool}
					/>
				</div>

				{/* <input
					type="text"
					require
					value={category}
					placeHolder={category || "test"}
				/>
				<input
					required
					onChange={(e) => {
						// console.log(e.target.value);
						setEditedBlog({ ...editedBlog, date: e.target.value });
					}}
					value={date}
					placeholder="Date"
					type="date"
				/>
				<div id="name-and-title" className="row">
					<div className="editor col">
						<h6 className="editor-label">Blog Name</h6>
						<EditorJs
							data={name}
							instanceRef={(instance) => (nameRef.current = instance)}
							placeholder={name}
							tools={tool}
							minHeight={3}
							onChange={(newContent) => {
								// setName(newContent);
								handleEditorChange({
									newContent,
									state: "name",
									ref: nameRef,
								});
							}}
						/>
					</div>

					<div className="editor col">
						<h6 className="editor-label">Blog Title</h6>
						<EditorJs
							data={title}
							instanceRef={(instance) => (titleRef.current = instance)}
							placeholder={title}
							tools={titleTool}
							minHeight={3}
							onChange={(newContent) => {
								handleEditorChange({
									newContent,
									state: "title",
									ref: titleRef,
								});
							}}
						/>
					</div>
				</div>
				<input
					required
					onChange={(e) => {
						// setType(e.target.value);
					}}
					value={type}
					placeholder="Type"
				/>
				<div className="editor">
					<h6 className="editor-label">Blog Info</h6>

					<EditorJs
						data={info}
						instanceRef={(instance) => (infoRef.current = instance)}
						placeholder={info}
						tools={infoTool}
						minHeight={1}
						onChange={(newContent) => {
							handleEditorChange({
								newContent,
								state: "info",
								ref: infoRef,
							});
						}}
					/>
				</div>
				<input
					required
					onChange={(e) => {
						handleSubheading(e);
					}}
					value={unEditedSubheading}
					placeholder="SubHeading"
				/>
				<input
					required
					onChange={(e) => {
						handleTag(e);
					}}
					value={unEditedTags}
					placeholder="Tags"
				/>
				<input
					required
					onChange={(e) => {
						// setLink(e.target.value);
					}}
					value={link}
					placeholder="Link"
				/>
				<button
					type="button"
					disabled={isLoading}
					onClick={() => {
						setEditBlog(false);
					}}
				>
					Cancel
				</button> */}

				<button
					className="btn btn-danger"
					type="button"
					disabled={isLoading}
					onClick={() => {
						setEditBlog(false);
						setLoading(false);
					}}
				>
					Cancel
				</button>
				<button className="btn btn-primary" disabled={isLoading}>
					Post
				</button>
			</form>
		</div>
	);
};

export default StyleBlog;
