const mongoose = require("mongoose");

// Connect to Mongodb
const URI =
	process.env.MONGODB_URL ||
	mongoose.connect(URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	});
const db = mongoose.connection;
// database connection event
db.on("connected", function () {
	console.log(`Mongoose connected to:${db.host}:${db.port}`);
});
