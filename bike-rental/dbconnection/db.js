const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'stephenp',
  password: 'Nodeproject1',
  database: 'bikerental'
});

module.exports = pool;