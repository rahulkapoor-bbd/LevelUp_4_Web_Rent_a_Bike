const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'bikedb.cph9smjdgcof.af-south-1.rds.amazonaws.com',
  user: 'admin',
  password: 'RentABike',
  database: 'bikerental'
});

module.exports = pool;