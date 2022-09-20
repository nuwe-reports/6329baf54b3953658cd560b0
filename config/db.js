const mysql = require('mysql');

// ===========================
// database data connection
// ===========================

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rickandmorty'
});

module.exports = connection;