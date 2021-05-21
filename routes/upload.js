const router = require("express").Router();
const Datauri = require("datauri/parser");
const cloudinary = require("cloudinary").v2;
const auth = require("../utils/auth");
const authAdmin = require("../utils/authAdmin");
const fs = require("fs");

const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const storage = new CloudinaryStorage({
	cloudinary: cloudinary,
	params: {
		folder: "PoliticallySavvy/BlogInfo",
		format: async () => "png" || "jpeg",
		public_id: (req, file) => file.filename,
	},
});
const parser = multer({
	storage: storage,
	limits: { fileSize: 1024 * 1024 * 5 },
}).single("image");

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUD_API_KEY,
	api_secret: process.env.CLOUD_API_SECRET,
});

//image upload
router.post("/uploadFroalaImage", parser, (req, res) => {
	if (!req.file || Object.keys(req.file).length === 0)
		return res.status(400).send({ msg: "No files were uploaded." });
	res.json(req.file);
});

router.post(
	"/upload",
	parser,
	/* auth, authAdmin, */
	(req, res) => {
		try {
			if (!req.file || Object.keys(req.file).length === 0)
				return res.status(400).send({ msg: "No files were uploaded." });
			res.json(req.file);
			// if (!file || Object.keys(file).length === 0) {
			// 	return res.status(400).send({ msg: "No files were uploaded." });
			// }
			// if (file.size > 1024 * 1024) {
			// 	removeTmp(file.tempFilePath);
			// 	return res.status(400).json({ msg: "File size too large" });
			// }
			// if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
			// 	removeTmp(file.tempFilePath);
			// 	return res.status(400).json({ msg: "File format is incorrect" });
			// }
			// cloudinary.v2.uploader.upload(
			// 	file.tempFilePath,
			// 	{ folder: "PolticallySavvy" },
			// 	async (err, result) => {
			// 		if (err) throw err;
			// 		removeTmp(file.tempFilePath);
			// 		return res.json({ result });
			// 	}
			// );
		} catch (err) {
			console.log(err)
			return res.status(500).json({ msg: err.message });
		}
	}
);

//image delete
router.post("/destory", auth, authAdmin, (req, res) => {
	try {
		const { public_id } = req.body;
		if (!public_id) return res.status(400).json({ msg: "No images Selected" });

		cloudinary.v2.uploader.destroy(public_id, async (err, result) => {
			if (err) throw err;

			res.json({ msg: "Deleted Image" });
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
});

const removeTmp = (path) => {
	fs.unlink(path, (err) => {
		if (err) throw err;
	});
};

module.exports = router;
