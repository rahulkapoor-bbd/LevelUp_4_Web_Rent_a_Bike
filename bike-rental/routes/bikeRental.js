var router = require('express').Router();
const bikeRentalController = require('../controllers/bikeRentalController');
const utilsController = require('../controllers/ulilities');

  router.get('/', async (req, res, next) => {
  try {
    const bikeInfo = await bikeRentalController.getBikeInfo();
    const description = await utilsController.getDescriptionFromBikeType(bikeInfo.typeId)
    console.log(description)
    res.render('bikeRental', { data: bikeInfo, description: description });
  } catch (err) {
    next(err);
  }
});


module.exports = router;
