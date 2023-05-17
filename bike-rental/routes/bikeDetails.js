const express = require('express');
const router = express.Router();
const bikeDetailsController = require('../controllers/bikeDetailsController');
const utilsController = require('../controllers/ulilities');

let selectedBike = {
    bikeId: 1,
    bikeName: 'Roadster',
    bikeType: 'Road Bike',
    dailyRate: '$6',
    availability: true
  }


router.get('/', async (req, res, next) => {
  try {
    // going to need another query to get the description of the bikeType, for the specific bike
    // the getDescriptionFromBikeId needs to accept the bike id as well
    const bikeId = req.query.bikeId;
    console.log("selected bike id: "+bikeId);
    const bike = await bikeDetailsController.getBikeDetails(bikeId);
    const description = await utilsController.getDescriptionFromBikeType(bike.typeId);
    console.log(description);
    res.render('bikeDetails', { data: bike, description: description });
  } catch (err) {
    next(err);
  }
});



module.exports = router;