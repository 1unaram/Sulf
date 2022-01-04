var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dbstjr66',
    database: 'sulfDB'
});

module.exports = connection;