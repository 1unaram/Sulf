const express = require("express");
const bodyParser = require('body-parser')
const mysql = require("mysql");
const connection = require("../mysql");
const router = express.Router();

router.get('/', (req, res) => { //불러오는 경로.
    connection.query(
        "SELECT*FROM data",
        (err, results, fields) => {
            let array = [];
            for (let data of results) {
                array.push(data);
            };
            let dataJSON = {
                data: array
            }

            res.send(dataJSON);
        }
    );
});
module.exports = router;
