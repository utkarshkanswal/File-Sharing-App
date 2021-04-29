const express = require("express");
const path = require("path");
const {
    connection
} = require("mongoose");
const app = express();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 3000;

connectDB();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.set("views", __dirname + "/views"); // set express to look in this folder to render our view
app.use(express.urlencoded());

app.use("/api/files", require("./routes/file"));


app.get("/", function (req, res) {

    res.render("index");

});


app.listen(PORT, () => {
    console.log(`Server is Running at Port: ${PORT}`)
});