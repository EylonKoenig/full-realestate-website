var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // need to add password of root db
    database: 'realtor',
    port: '3306'
});
connection.connect();


module.exports = connection;
