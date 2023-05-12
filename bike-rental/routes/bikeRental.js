var express = require('express');
var router = express.Router();
const bikeRentalController = require('../controllers/bikeRental');

// we want to write a query in our bikeRental controller that will return a list of all
// the bike information. So that we can render it dynamically on the view
// so the function below will look something like this:

/*
  router.get('/', async (req, res, next) => {
  try {
    const bikeInfo = await bikeRentalController.getBikeInfo();
    res.render('bikeRental', { data: bikeInfo });
  } catch (err) {
    next(err);
  }
});
*/

let bikeInfo = [
  {
    bikeId: 1,
    bikeName: 'Roadster',
    bikeType: 'Road Bike',
    dailyRate: '$6',
    availability: true
  },
  {
    bikeId: 2,
    bikeName: 'Mountain Beast',
    bikeType: 'Mountain Bike',
    dailyRate: '$7',
    availability: true
  },
  {
    bikeId: 3,
    bikeName: 'City Cruiser',
    bikeType: 'City Bike',
    dailyRate: '$5',
    availability: false
  },
  {
    bikeId: 4,
    bikeName: 'Road Cruiser',
    bikeType: 'Road Bike',
    dailyRate: '$4.50',
    availability: true
  }
];

router.get('/', function(req, res, next) {
  res.render('bikeRental', { data: bikeInfo });
});

module.exports = router;
