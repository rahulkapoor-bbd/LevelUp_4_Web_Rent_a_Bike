const pool = require('../dbconnection/db')

const getBikeDetails = (bikeId) => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT b.bikeId, t.typeDescription, b.dailyrate FROM bike b, biketype t WHERE t.typeId = b.typeId AND b.bikeId = ?', [bikeId], (error, results) => {
        if (error) {
          console.error('Error executing query:', error);
          reject(error);
          return;
        }
                
        const bike = results.map((row) => ({
          bikeId: row.bikeId,
          typeDescription: row.typeDescription,
          dailyRate: row.dailyrate
        }));
  
        resolve(bike);
      });
    });
};

const createNewRental = (bikeId, userId, rentalStart, rentalEnd) => {
  return new Promise((res, rej) => {
    //const newStart = new Date(rentalStart).toLocaleDateString('en-CA');
    //const newEnd = new Date(rentalEnd).toLocaleDateString('en-CA');
    pool.query(`INSERT INTO rentals(bikeId, userId, rentalStart, rentalEnd) VALUES (?, ?, STR_TO_DATE( ?, "%Y-%m-%d"), STR_TO_DATE( ?, "%Y-%m-%d"))`, [bikeId, userId, rentalStart, rentalEnd], (error) => {
          if (error) {
              console.error('Error occured when executing query: ', error);
              rej(error);
              return;
          }
          res(true);
      });
  });
};

module.exports = {
  getBikeDetails,
  createNewRental,
};