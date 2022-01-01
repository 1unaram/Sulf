const express = require("express");
const router = express.Router();

const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./Router/testData.json", "utf8"));

router.get("/", (req, res) => {
    res.send(data);
});

module.exports = router;