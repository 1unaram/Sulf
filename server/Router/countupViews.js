// backend
const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const connection = require("../mysql");

router.post('/', (req, res) => {
    let sql = `update data set views = ${parseInt(req.body.views) + 1} where id = ${req.body.id}`
    connection.query(sql);
});

module.exports = router;