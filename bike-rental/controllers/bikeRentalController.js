const pool = require('../dbconnection/db');

const getBikeInfo = () => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT b.bikeId, t.typeDescription, s.statusDescription, b.dailyrate FROM bike b, biketype t, bikestatus s WHERE t.typeId = b.typeId AND s.statusId = b.statusId', (error, results) => {
        if (error) {
          console.error('Error executing query:', error);
          reject(error);
          return;
        }
        const bikeInfo = results.map((row) => ({
          bikeId: row.bikeId,
          typeDescription: row.typeDescription,
          statusDescription: row.statusDescription,
          dailyRate: row.dailyrate
        }));
  
        resolve(bikeInfo);
      });
    });
  };

  module.exports = {
    getBikeInfo
};