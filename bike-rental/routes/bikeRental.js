var express = require('express');
var router = express.Router();
const bikeRentalController = require('../controllers/bikeRental');

  router.get('/', async (req, res, next) => {
  try {
    const bikeInfo = await bikeRentalController.getBikeInfo();
    res.render('bikeRental', { data: bikeInfo });
  } catch (err) {
    next(err);
  }
});


module.exports = router;
