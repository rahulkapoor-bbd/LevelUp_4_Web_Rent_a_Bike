// const sql = require('mssql');
const { Connection, Request } = require('tedious');

// const config = {
//   server: "localhost",
//   database: "BikeRental",
//   options: {
//     trustedConnection: true
//   }
// };

const config = {
  authentication: {
    type: 'default',
    options: {
      userName: '',
      password: ''
    }
  },
  server: '127.0.0.1', 
  options: {
    database: 'BikeRental',
    encrypt: false
  }
};


const connection = new Connection(config);

connection.on('connect', err => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database.');

    // Execute your queries here
    executeQuery();
  }
});

connection.on('error', err => {
  console.error('Database error:', err);
});

function executeQuery() {
  const request = new Request('SELECT * FROM Bikes', (err, rowCount, rows) => {
    if (err) {
      console.error('Error executing query:', err);
    } else {
      console.log('Query result:', rows);
    }

    connection.close();
  });

  connection.execSql(request);
}

function connect() {
  connection.connect()
}

module.exports = {
  connect: connect
};