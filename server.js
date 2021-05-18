require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "100kb" }));
app.use(cookieParser());
app.use(cors());
app.use(
	fileUpload({
		useTempFiles: true,
	})
);

//Database
require("./config/database");

//Routes
app.use("/user", require("./routes/user"));
app.use("/api", require("./routes/category"));
app.use("/api", require("./routes/product"));
app.use("/api", require("./routes/upload"));
app.use("/api", require("./routes/payment"));
app.use("/api", require("./routes/blog"));

if (process.env.NODE_ENV === "production") {
	app.use(express.static("build"));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "build", "index.html"));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running on port, ${PORT}`);
});
