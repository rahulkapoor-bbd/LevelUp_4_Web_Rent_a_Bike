const pool = require('../dbconnection/db');

const getBikeInfo = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      'SELECT b.bikeId, t.description AS typeDescription, s.description AS statusDescription, b.dailyRate FROM bike b JOIN biketype t ON t.typeId = b.typeId JOIN bikestatus s ON s.statusId = b.statusId',
      (error, results) => {
        if (error) {
          console.error('Error executing query:', error);
          reject(error);
          return;
        }
        const bikeInfo = results.map((row) => ({
          bikeId: row.bikeId,
          typeDescription: row.typeDescription,
          statusDescription: row.statusDescription,
          dailyRate: row.dailyRate
        }));

        resolve(bikeInfo);
      }
    );
  });
};

  module.exports = {
    getBikeInfo
};