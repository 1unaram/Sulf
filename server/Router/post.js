const express = require("express");
const router = express.Router();

const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./Router/testData.json", "utf8"));

router.get("/", (req, res) => {
    res.send(data);
});

module.exports = router;

// 윤석's
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));

// const conf = JSON.parse(data);
// const mysql = require("mysql");

// const connection = mysql.createConnection({
//     host : conf.host,
//     user: conf.user,
//     password : conf.password,
//     port : conf.port,
//     database: conf.database
// });
// connection.connect();

// app.get('/postReq', (req, res) => { //불러오는 경로.
//     connection.query(
//         "SELECT*FROM USER",
//         (err,rows,fields) => {
//             res.send(rows);
//         }
//     );
// });

// router.get("/", (req, res) => {
//     res.send(data);
// });

// module.exports = router;