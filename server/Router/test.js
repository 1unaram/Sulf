const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send([{
        id: 1,
        title: "Sulf 설문조사1"
    }]);
});

module.exports = router;