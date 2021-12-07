const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json(
        { id: "1", birthday: "1001" }
    )
});

module.exports = router;