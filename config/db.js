require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect("mongodb+srv://utkarsh:2NsCJLt4PVsfgJhz@projectuse.i6hnd.mongodb.net/FileShare?retryWrites=true&w=majority", {
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