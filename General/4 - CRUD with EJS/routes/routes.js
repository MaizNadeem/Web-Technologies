const express = require("express");
const router = express.Router();
const theme = require("../config/muiConfig");

router.get("/", (req, res) => {
    res.render("index", { title: "Homepage", theme });
});

module.exports = router;