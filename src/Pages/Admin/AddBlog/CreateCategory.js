import React from "react";

const CreateCategory = (props) => {
	const {
		categoryLoading,
		handleInputCategory,
		inputCategory,
		submitCategory,
		setShowCreateCategory,
	} = props;
	return (
		<div>
			<div style={{ marginBottom: "5px" }}>
				<h3>Create Category</h3>
				<input
					required
					disabled={categoryLoading}
					onChange={(e) => {
						handleInputCategory(e);
					}}
					value={inputCategory}
				/>
				<button
					classname="btn btn-primary"
					onClick={(e) => {
						submitCategory(e);
					}}
				>
					Create
				</button>
				<button
					classname="btn btn-danger"
					onClick={() => {
						setShowCreateCategory(false);
					}}
				>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default CreateCategory;
