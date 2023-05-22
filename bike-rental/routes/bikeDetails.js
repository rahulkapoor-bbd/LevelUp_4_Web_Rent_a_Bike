const router = require('express').Router();
const bikeDetailsController = require('../controllers/bikeDetailsController');

  router.get('/', async (req, res, next) => {
    try {
      const bikeId = req.query.bikeId;
      const bike = await bikeDetailsController.getBikeDetails(bikeId);
      res.render('bikeDetails', { bike: bike[0] }); 
    } catch (err) {
      next(err); 
    }
  });

router.post('/', async (req, res, next) => {
  try {
    var bikeId = req.body.bikeId;
    //TODO:
    //var userId = req.body.userId;
    // hardcoded since we do not have the userId yet (**need this from the login**)
    var userId = 1;
    var rentalStart = req.body['start-date'];
    var rentalEnd = req.body['end-date'];

    const rentalInfo = await bikeDetailsController.createNewRental(bikeId, userId, rentalStart, rentalEnd);
    res.status(201).send({ message: `Successfully created rental booking` });
  } catch (err) {
    next(err)
  }
});

router.put('/', async (req, res, next) => {
  try {
    var statusId = req.body.statusId;
    var bikeId = req.body.bikeId;

    const rentalInfo = await bikeDetailsController.updateBikeStatus(statusId, bikeId);
    res.status(201).send({ message: `Successfully updated bike rental status` });
  } catch (err) {
    next(err)
  }
});

module.exports = router;