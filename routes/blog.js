const router = require("express").Router();
const auth = require("../utils/auth");
const authAdmin = require("../utils/authAdmin");
const Blog = require("../models/blogModel");

router.post(
	"/postBlog",
	/* auth, authAdmin, */ async (req, res) => {
		const {
			category,
			name,
			date,
			img,
			title,
			type,
			info,
			subHeading,
			tags,
			link,
		} = req.body;
		if (
			!category ||
			!name ||
			!date ||
			// !img ||
			!title ||
			!type ||
			!info ||
			!subHeading ||
			!tags ||
			!link
		) {
			return res.status(401).json({ msg: "missing input, try again" });
		}
		try {
			const createdBlog = new Blog({
				category: category,
				name: name,
				date: date,
				// img:img,
				title: title,
				type: type,
				info: info,
				subHeading: subHeading,
				tags: tags,
				link: link,
			});
			await Blog.insertMany(createdBlog);
			console.log(createdBlog);
			return res
				.status(201)
				.json({ message: "Successfully added blog", blogID: createdBlog._id });
		} catch (error) {
			return res.status(401).json({ msg: error });
		}
	}
);
router.get(
	"/getBlogs",
	/* auth, authAdmin, */ async (req, res) => {
		try {
			const blogData = await Blog.find();
			return res
				.status(201)
				.json({ message: "Successfully found blog", blogData: blogData });
		} catch (err) {
			return res.status(401).json({ msg: err });
		}
	}
);
router.get(
	"/getBlog",
	/* auth, authAdmin, */ async (req, res) => {
		console.log(req.query);
		if (!req.query[0]) {
			return res.status(401).json({ msg: "Invalid Request: No ID provided" });
		}
		try {
			const blogData = await Blog.findOne({ _id: req.query[0] });
			return res
				.status(201)
				.json({ message: "Successfully found blog", blogData: blogData });
		} catch (err) {
			return res.status(401).json({ msg: err });
		}
	}
);
router.delete(
	"/deleteBlog",
	/* auth, authAdmin, */ async (req, res) => {
		if (!req.query[0]) {
			return res.status(401).json({ msg: "Invalid Request: No ID provided" });
		}
		try {
			const blogData = await Blog.findOneAndDelete({ _id: req.query[0] });
			return res
				.status(201)
				.json({ message: "Successfully delete blog", blogData: blogData });
		} catch (err) {
			return res.status(401).json({ msg: err });
		}
	}
);
module.exports = router;
