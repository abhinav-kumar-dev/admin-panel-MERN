const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const db = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection to database successful");
    } catch (error) {
        console.log("Connection to database failed");
        process.exit(0)
    }
};

module.exports = db;