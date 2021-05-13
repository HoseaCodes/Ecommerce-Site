const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
	category: String,
	name: String,
	date: Date,
	img: String,
	title: String,
	type: String,
	info: String,
	subHeading: [String],
	tags: [String],
	link: String,
}, {
    timestamps: true
})

module.exports = mongoose.model("Blog", blogSchema);