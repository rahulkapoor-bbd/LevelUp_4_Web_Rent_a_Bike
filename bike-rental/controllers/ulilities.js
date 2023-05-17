const router = require('express').Router();
const pool = require('../dbconnection/db')

const getDescriptionFromBikeType = (typeId) => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT description FROM biketype WHERE typeId = ?', [typeId], (error, results) => {
        if (error) {
          console.error('Error executing query:', error);
          reject(error);
          return;
        }
        const bikeDescription = results[0];
        resolve(bikeDescription);
      
      });
    });
  };

  module.exports = {
    getDescriptionFromBikeType,
  }