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
      
      updateBikeStatus(2, bikeId);
      });
  });
};

const updateBikeStatus = (statusId, bikeId) => {

  console.log(statusId)
  console.log(bikeId);
  return new Promise((res, rej) => {
    
    pool.query(`UPDATE bike SET statusId = ? WHERE bikeId = ?`, [statusId, bikeId], (error) => {
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
  updateBikeStatus,
};