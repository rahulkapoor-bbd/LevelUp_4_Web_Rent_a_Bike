const pool = require('../dbconnection/db')

const getBikeDetails = (bikeId) => {
  return new Promise((resolve, reject) => {
    pool.query(
      'SELECT b.bikeId, t.description AS typeDescription, b.dailyRate FROM bike b JOIN biketype t ON t.typeId = b.typeId WHERE b.bikeId = ?',
      [bikeId],
      (error, results) => {
        if (error) {
          console.error('Error executing query:', error);
          reject(error);
          return;
        }

        const bike = results.map((row) => ({
          bikeId: row.bikeId,
          typeDescription: row.typeDescription,
          dailyRate: row.dailyRate
        }));

        resolve(bike);
      }
    );
  });
};


module.exports = {
  getBikeDetails,
};