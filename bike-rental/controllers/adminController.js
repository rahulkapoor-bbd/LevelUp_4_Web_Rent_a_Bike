const { response } = require('../app');
const pool = require('../dbconnection/db');

const addBike = (typeId, statusId, dailyRate) => {
  return new Promise((resolve, reject) => {
    pool.query(
      'INSERT INTO bike (typeId, statusId, dailyRate) VALUES (?, ?, ?)',
      [typeId, statusId, dailyRate],
      (error) => {
        if (error) {
          console.error('Error occurred when executing query: ', error);
          reject(error);
          return;
        }
        resolve(true);
      }
    );
  });
};

module.exports = {
  addBike,
};