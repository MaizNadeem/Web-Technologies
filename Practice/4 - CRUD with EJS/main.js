// Imports

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 8080;


// DB Connection

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("Connected to MongoDB"));


// Middlewares

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: "express session secret key",
    saveUninitialized: true,
    resave: false,
}));
app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});
app.use(express.static('public'));


// Set template engine

app.set("view engine", "ejs");


// Route Prefix

app.use("", require("./routes/routes"));


// Start

app.listen(PORT, () => {
    console.log(`Server started at: http://localhost:${PORT}`);
});