// backend
const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();
const mysql = require("mysql");
const connection = require("../mysql");

router.post('/', (req, res) => {
    let sql = `INSERT INTO data VALUES (?,?,?,?,?,?,?,?,'1')`;

    const params = [
        req.body.title,
        req.body.id,
        req.body.date,
        req.body.target,
        req.body.deadline,
        req.body.description,
        req.body.url,
        req.body.category,
        req.body.views
    ];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    );
});

module.exports = router;