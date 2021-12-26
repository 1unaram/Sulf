const express = require("express");
const router = express.Router();

router.post('/sendPost', (req, res) => {
    console.log(req)
});
router.get('/sendPost', (req, res) => {
    // console.log(req)
});

module.exports = router;