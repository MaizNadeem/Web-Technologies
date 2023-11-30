const express = require("express");
// const mongoose = require("mongoose");
require('dotenv').config();

const app = express();

const PORT = process.env.PORT;
// const dbURL = process.env.MONGO_DB_URL;

// mongoose
//     .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Connected to MongoDB');
//     })
//     .catch((err) => {
//         console.error('Error connecting to MongoDB:', err);
//     });


app.listen(PORT, () => {
    console.log("Server started.");
})
