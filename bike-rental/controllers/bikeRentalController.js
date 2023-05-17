const pool = require('../dbconnection/db');

const getBikeInfo = () => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM bike', (error, results) => {
        if (error) {
          console.error('Error executing query:', error);
          reject(error);
          return;
        }
        const bikeInfo = results.map((row) => ({
          bikeId: row.bikeId,
          typeId: row.typeId,
          statusId: row.statusId,
          userId: row.userId,
          dailyRate: row.dailyRate
          
        }));
  
        resolve(bikeInfo);
      });
    });
  };

  module.exports = {
    getBikeInfo
  };