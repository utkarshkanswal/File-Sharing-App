require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
    });
    const connection = mongoose.connection;
    connection.once("open", () => {
        console.log("DataBase is Connected");
    }).catch(err => {
        console.log("Connection Failure");
    });
}

module.exports = connectDB;