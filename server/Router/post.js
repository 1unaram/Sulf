const express = require("express");
// const mysql = require("mysql");
// const connection = require("./mysql");
const router = express.Router();

const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./Router/testData.json", "utf8"));

router.get("/", (req, res) => {
    res.send(data);
});

module.exports = router;

// 윤석's
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }));

// router.get('/postReq', (req, res) => { //불러오는 경로.
//     connection.query(
//         "SELECT*FROM USER",
//         (err, rows, fields) => {
//             res.send(rows);
//         }
//     );
// });

// router.get("/", (req, res) => {
//     res.send(data);
// });

// module.exports = router;
