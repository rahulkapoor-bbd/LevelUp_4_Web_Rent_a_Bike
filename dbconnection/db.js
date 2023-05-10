require('dotenv').config();
const sql = require('mssql');

const config = {
  server: 'localhost\\SQLEXPRESS',
  database: 'BikeRental',
  options: {
    trustedConnection: true
  }
};

async function connect() {
  try {
    await sql.connect(config);
    console.log('Connected to database');
  } catch (err) {
    console.error('Error connecting to database: ', err);
  }
}



module.exports = {
  connect: connect,
  sql: sql
};
