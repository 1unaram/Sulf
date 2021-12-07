const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            title: "Sulf 설문조사123",
            target: "대학생",
        },
        {
            id: 2,
            title: "Sulf 설문조사124",
            target: "대학생2",
        },
    ]);
});

module.exports = router;