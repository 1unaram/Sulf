const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dbstjr66',
    database: 'sulfData'
});

conn.connect();

conn.query('SELECT 1 + 1 AS solution',
    function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
    });

conn.end();