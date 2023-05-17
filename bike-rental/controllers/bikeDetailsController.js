const router = require('express').Router();
const pool = require('../dbconnection/db')

const getBikeDetails = (bikeId) => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM bike WHERE bikeId = ?', [bikeId], (error, results) => {
        if (error) {
          console.error('Error executing query:', error);
          reject(error);
          return;
        }
        
        if (results.length === 0) {
          // Bike with the specified ID was not found
          resolve(null);
          return;
        }
        
        const bike = {
          bikeId: results[0].bikeId,
          typeId: results[0].typeId,
          statusId: results[0].statusId,
          userId: results[0].userId,
          dailyRate: results[0].dailyRate
        };
  
        resolve(bike);
      });
    });
  };

  module.exports = {
    getBikeDetails
  }