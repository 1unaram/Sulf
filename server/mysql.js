var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '13.125.184.140',
    user: 'root',
    password: 'zhavmTjfvm3!',
    database: 'sulfDB'
});

module.exports = connection;