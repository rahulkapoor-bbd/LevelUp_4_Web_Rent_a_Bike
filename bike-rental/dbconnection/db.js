const sql = require('mssql');

const config = {
  server: "localhost",
  database: "BikeRental",
  options: {
    trustedConnection: true
  }
};

/*
async function connect() {
  try {
    await sql.connect(config);
    console.log('Connected to database');
  } catch (err) {
    console.error('Error connecting to database: ', err);
  }
}
*/
async function connect() {
  console.log('connected to db');
}


module.exports = {
  connect: connect,
  sql: sql
};