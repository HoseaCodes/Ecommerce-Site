const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
	{
		category: Object,
		name: Object,
		date: Object,
		// img: String,
		title: Object,
		type: Object,
		info: Object,
		subHeading: Object,
		tags: Object,
		link: Object,
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Blog", blogSchema);
