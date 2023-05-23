const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Nodeproject1',
  database: 'bikerental'
});

module.exports = pool;