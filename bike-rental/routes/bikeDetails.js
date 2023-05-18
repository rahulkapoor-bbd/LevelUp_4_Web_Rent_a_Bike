const router = require('express').Router();
const bikeDetailsController = require('../controllers/bikeDetailsController');
//const rentalController = require('../controllers/rentalController');

/*let selectedBike = {
    bikeId: 1,
    bikeName: 'Roadster',
    bikeType: 'Road Bike',
    dailyRate: '$6',
    availability: true
  }*/


router.get('/', async (req, res, next) => {
  try {
    const bikeId = req.query.bikeId;
    const bike = await bikeDetailsController.getBikeDetails(bikeId);
    res.render('bikeDetails', { data: bike });
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const bikeId = req.body.bikeId;
    const userId = req.body.userId;
    const rentalStart = req.body.rentalStart;
    const rentalEnd = req.body.rentalEnd;

    const rentalInfo = await bikeDetailsController.createNewRental(bikeId, userId, rentalStart, rentalEnd);
    res.status(201).send({ message: `Successfully created rental booking` });
  } catch (err) {
    next(err)
  }
});

module.exports = router;