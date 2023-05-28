const router = require('express').Router();
const bikeRentalController = require('../controllers/bikeRentalController');

router.get('/', async (req, res, next) => {
  try {
    const bikeInfo = await bikeRentalController.getBikeInfo();
    res.json(bikeInfo);
  } catch (err) {
    next(err);
  }
});

module.exports = router;