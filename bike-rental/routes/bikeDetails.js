const express = require('express');
const router = express.Router();
const bikeDetailsController = require('../controllers/bikeDetails');

// this is a hardcoded result of what we would expect from the actaul query :)
let selectedBike = {
    bikeId: 1,
    bikeName: 'Roadster',
    bikeType: 'Road Bike',
    dailyRate: '$6',
    availability: true
  }

/*
similarly to the bikeRental, we expect a query in the 
bikeDetails controller to return a single bike object
which will be displayed in the res.render

router.get('/bikeDetails', async (req, res, next) => {
  try {
    const bikeId = req.query.bikeId;
    const bike = await bikeDetailsController.getBikeDetails(bikeId);
    res.render('bikeDetails', { bike });
  } catch (err) {
    next(err);
  }
});


*/

router.get('/', function(req, res, next) {
    res.render('bikeDetails', { bike: selectedBike });
  });

module.exports = router;